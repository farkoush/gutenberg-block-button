import { __ } from '@wordpress/i18n';
// import { useState } from '@wordpress/element';

import Inspector from './Inspector';


import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	//Handlers
	function buttonHandler (event){
		console.log("Clicked");
	}

	// useEffect(() => {
	// 	// Update the document title using the browser API
	// 	wp.apiFetch( { path: '/wp-json/wp/v2/posts/' } ).then( pages => { );}); 
	// },[]);

	return (
		<div>
				<Inspector value={{attributes, setAttributes}} />
				<button 
				 	type="button" 
					className='gt-botton' 
					target= {attributes.target}  
					onClick={buttonHandler}
					onChange={ ( val ) => setAttributes( { message: val } ) }
					style={ {
                        backgroundColor: attributes.bg_color,
                        color: attributes.text_color,
						textAlign: attributes.alignment
                    } }>
						{attributes.text}
				</button>
		</div>

	);
}
