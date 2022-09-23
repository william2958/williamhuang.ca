import React from 'react';
import {RichEditorControlsWrapper, RichEditorStyleButton} from "./styles";
import SvgIcon from "../SvgIcon";

const BlockStyleControls = ({ editorState, onToggle }) => {

    const selection = editorState.getSelection();

    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    const BLOCK_TYPES = [
        {label: 'H1', style: 'header-one'},
        {label: 'H2', style: 'header-two'},
        {label: 'H3', style: 'header-three'},
        {label: 'H4', style: 'header-four'},
        {label: 'H5', style: 'header-five'},
        {label: 'H6', style: 'header-six'},
        {label: 'Blockquote', style: 'blockquote'},
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'},
        {label: 'Code Block', style: 'code-block'},
    ];

    const ALIGNMENT_TYPES = [
        {label: 'Left', style: 'left'},
        {label: 'Center', style: 'center'},
        {label: 'Right', style: 'right'}
    ];

    const alignmentMap = {
        "Left": "AlignLeft",
        "Center": "AlignCenter",
        "Right": "AlignRight"
    };

    return (
        <RichEditorControlsWrapper>
            <div>
                {
                    BLOCK_TYPES.map((type) =>
                        (
                            <RichEditorStyleButton
                                active={type.style === blockType}
                                onMouseDown={() => onToggle(type.style, blockType)}
                                key={type.label}
                            >
                                {type.label}
                            </RichEditorStyleButton>
                        )
                    )
                }
                {
                    ALIGNMENT_TYPES.map((type) =>
                        (
                            <RichEditorStyleButton
                                active={type.style === blockType}
                                onMouseDown={() => onToggle(type.style, blockType)}
                                key={type.label}
                            >
                                <SvgIcon icon={alignmentMap[type.label]} />
                            </RichEditorStyleButton>
                        )
                    )
                }
            </div>
        </RichEditorControlsWrapper>
    )

};

export default BlockStyleControls;
