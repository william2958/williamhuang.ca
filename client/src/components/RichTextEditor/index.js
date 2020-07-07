import React, {useRef, useState} from 'react';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';

import Editor, { composeDecorators } from 'draft-js-plugins-editor';

import createImagePlugin from 'draft-js-image-plugin';

import createAlignmentPlugin from 'draft-js-alignment-plugin';

import createFocusPlugin from 'draft-js-focus-plugin';

import createResizeablePlugin from 'draft-js-resizeable-plugin';

import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

// import 'draft-js-alignment-plugin/lib/plugin.css';
// import 'draft-js-image-plugin/lib/plugin.css';

import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";
import axios from "../../utils/axios";
import {EditorPanelWrapper, InsertLinkWrapper} from "./styles";
import FileInput from "../UI/Inputs/FileInput";
import {toast} from "react-toastify";
import {EditorWrapper, RichTextEditorWrapper} from "./RichTextEditorStyles";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
    blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [
    blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
    imagePlugin
];

const RichTextEditor = ({ editorState, changeEditorState = () => {}, readOnly = false }) => {

    const [urlValue, setUrlValue] = useState('');
    const [showUrlBox, setShowUrlBox] = useState(false);

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            changeEditorState(newState);
            return true;
        } else {
            return false;
        }
    };

    const selectImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const data = new FormData();
                data.append('file', file);
                data.append('path', 'bookReviewContentImages/');

                const response = (await axios.post('/bookReview/uploadBookImage', data)).data;
                const { coverURL } = response;


                const imageNameParts = coverURL.split('/');
                const imageName = imageNameParts.pop();

                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity(
                    "image",
                    "IMMUTABLE",
                    { src: `${imageNameParts.join('/')}/resize_1024_${imageName}` }
                );
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.set(
                    editorState,
                    { currentContent: contentStateWithEntity },
                    "create-entity"
                );

                changeEditorState(AtomicBlockUtils.insertAtomicBlock(
                    newEditorState,
                    entityKey,
                    " "
                ));

            } catch (error) {
                console.error('Error uploading file: ', error);
            }
        } else {
            toast.error('There was no file provided');
        }

    };

    const editorRef = useRef(null);
    const linkInputRef = useRef(null);
    const focus = () => {
        // todo this line is broken
        // editorRef.current.focus();
    };

    const _promptForLink = (e) => {
        e.preventDefault();
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent();
            const startKey = editorState.getSelection().getStartKey();
            const startOffset = editorState.getSelection().getStartOffset();
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

            let url = '';
            if (linkKey) {
                const linkInstance = contentState.getEntity(linkKey);
                url = linkInstance.getData().url;
            }

            setUrlValue(url);
            setShowUrlBox(true);
            setTimeout(() => linkInputRef.current.focus(), 0);
        }
    };

    const _confirmLink = (e) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            {url: urlValue}
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        changeEditorState(RichUtils.toggleLink(
            newEditorState,
            newEditorState.getSelection(),
            entityKey
        ));
        setShowUrlBox(false);
        setUrlValue('');
        setTimeout(() => editorRef.current.focus(), 0);
    };

    const _onLinkInputKeyDown = (e) => {
        if (e.which === 13) {
            _confirmLink(e);
        }
    };

    const _removeLink = (e) => {
        e.preventDefault();
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            changeEditorState(RichUtils.toggleLink(editorState, selection, null));
        }
    };


    const toggleBlockType = (blockType, prevBlockType) => {
        if (blockType + prevBlockType === 'centerheader-five' || blockType + prevBlockType === 'header-fivecenter') {
            blockType = 'header-five-center'
        }
        changeEditorState(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
        setTimeout(() => focus(), 0);
    };

    const toggleInlineStyle = inlineStyle => {
        changeEditorState(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
        setTimeout(() => focus(), 0);
    };

    const getBlockStyle = block => {
        switch (block.getType()) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            case 'header-one':
                return 'header1';
            case 'header-two':
                return 'header2';
            case 'header-three':
                return 'header3';
            case 'header-four':
                return 'header4';
            case 'header-five':
                return 'header5';
            case 'header-six':
                return 'header6';
            case 'unstyled':
                return 'RichEditor-unstyled';
            case 'left':
                return 'align-left';
            case 'center':
                return 'align-center';
            case 'right':
                return 'align-right';
            case 'header-five-center':
                return 'header5-center';
            case 'atomic':
                return 'editorImage';
            case 'unordered-list-item':
                return 'unordered-list-item';
            case 'ordered-list-item':
                return 'ordered-list-item';
            default:
                return null;
        }
    };

    const styleMap = {
        // BOLD: {
        //
        // },
        // ITALIC: {
        //
        // },
        // UNDERLINE: {
        //
        // },
        CODE: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 2,
        },
    };

    let hidePlaceholder = false;
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            hidePlaceholder = true;
        }
    }

    const getEditorPanel = () => {
        if (!readOnly) {
            return (
                <EditorPanelWrapper>
                    <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={toggleInlineStyle}
                        addLink={_promptForLink}
                        removeLink={_removeLink}
                    />
                    <FileInput title="Insert Image" onChange={selectImage} name="imagePickerButton" />
                </EditorPanelWrapper>
            )
        } else {
            return null;
        }
    };

    let urlInput;
    if (showUrlBox) {
        urlInput =
            <InsertLinkWrapper>
                <input
                    className="insertLinkInput"
                    onChange={e => setUrlValue(e.target.value)}
                    ref={linkInputRef}
                    type="text"
                    value={urlValue}
                    onKeyDown={_onLinkInputKeyDown}
                    placeholder="Paste link here"
                />
                <button className="insertLinkInputButton" onMouseDown={_confirmLink}>
                    Confirm
                </button>
            </InsertLinkWrapper>;
    }

    return (
        <RichTextEditorWrapper className="container" readOnly={readOnly}>
            {getEditorPanel()}
            {urlInput}
            <EditorWrapper hidePlaceholder={hidePlaceholder} onClick={focus}>
                <Editor
                    editorState={editorState}
                    onChange={newEditorState => changeEditorState(newEditorState)}
                    handleKeyCommand={handleKeyCommand}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    placeholder="Your review here..."
                    spellCheck={true}
                    ref={editorRef}
                    plugins={plugins}
                    readOnly={readOnly}
                />
                <AlignmentTool />
            </EditorWrapper>
        </RichTextEditorWrapper>
    )

};

export default RichTextEditor;
