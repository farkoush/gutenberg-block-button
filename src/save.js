import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<div>
			<button
				type="button"
				target= {attributes.target} 
				style={ {
                    backgroundColor: attributes.bg_color,
                    color: attributes.text_color,
                } }
			>{attributes.text}
			</button>
		</div>
	);
}
