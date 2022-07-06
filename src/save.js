import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		// <p { ...useBlockProps.save() }>
		<p>
			<button type="button">{attributes.text}</button>
			<div
                // { ...useBlockProps.save() }
                style={ {
                    backgroundColor: attributes.bg_color,
                    color: attributes.text_color,
                } }
            >
                { attributes.message }
            </div>
		</p>
	);
}
