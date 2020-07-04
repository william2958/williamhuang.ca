import React from 'react';
import {RichEditorControlsWrapper, RichEditorStyleButton} from "./styles";

const InlineStyleControls = ({ editorState, onToggle, addLink, removeLink }) => {

    const currentStyle = editorState.getCurrentInlineStyle();

    const INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'},
    ];

    return (
        <RichEditorControlsWrapper>
            {
                INLINE_STYLES.map(type =>
                    (
                        <RichEditorStyleButton
                            active={currentStyle.has(type.style)}
                            onMouseDown={() => onToggle(type.style)}
                            key={type.label}
                        >
                            {type.label}
                        </RichEditorStyleButton>
                    )
                )
            }
            <RichEditorStyleButton onMouseDown={addLink}>Link</RichEditorStyleButton>
            <RichEditorStyleButton onMouseDown={removeLink}>Unlink</RichEditorStyleButton>
        </RichEditorControlsWrapper>
    )

};

export default InlineStyleControls
