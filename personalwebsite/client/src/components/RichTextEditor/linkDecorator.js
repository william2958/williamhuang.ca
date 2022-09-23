import {CompositeDecorator} from "draft-js";
import React from "react";
import {EditorLinkTag} from "./styles";

function findLinkEntities(contentBlock, callback, contentState) {
	contentBlock.findEntityRanges(
		(character) => {
			const entityKey = character.getEntity();
			return (
				entityKey !== null &&
				contentState.getEntity(entityKey).getType() === 'LINK'
			);
		},
		callback
	);
}

const Link = (props) => {
	const {url} = props.contentState.getEntity(props.entityKey).getData();
	return (
		<EditorLinkTag href={url} target="_blank" rel="noopener noreferrer" className="textEditorLink">
			{props.children}
		</EditorLinkTag>
	);
};

export const decoratorLink = new CompositeDecorator([
	{
		strategy: findLinkEntities,
		component: Link
	}
]);
