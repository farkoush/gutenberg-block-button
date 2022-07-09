import { __ } from '@wordpress/i18n';
import { TextControl , SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

import {
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';


const Inspector = ({value:{attributes,setAttributes}}) => {
    //Defaults
    const[pages,setPages] = useState([])

	const colors = [
        { name: 'black', color: '#000' },
        { name: 'white', color: '#fff' },
        { name: 'primary', color: '#1a73e8' },
    ];

    //Handlers
    const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};

    useEffect(() => {
		apiFetch( { path: '/wp/v2/pages' } ).then( 
			( pagesData ) => {
				setPages(pagesData.map((page)=>({
                    id:   page.id, 
                    slug: page.slug, 
                    title:page.title.rendered, 
                    type: page.type
                })))
		} ); 
	},[]);

    return(
        <InspectorControls key="setting">
            <div id="gutenberg-blocks-controls">
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Background color', 'gutenberg-blocks' ) }
                    </legend>
                    <ColorPalette 
                        colors = { colors }
                        onChange = { onChangeBGColor }
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Text color', 'gutenberg-blocks' ) }
                    </legend>
                    <ColorPalette
                        colors = { colors } 
                        clearable = {true}
                        onChange = { onChangeTextColor }
                    />
                </fieldset>
                <SelectControl label="Alignment" value = { attributes.alignment }
                    options={ [
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
                        { label: 'Left', value: 'left' },
                    ] }
                    onChange={ alignment => setAttributes({alignment}) }
                />
                <SelectControl label="Target" value = { attributes.target }
                    options={ [
                        { label: 'Default', value: "_self" },
                        { label: 'New Window', value: "_blank" },
                    ] }
                    onChange={ target => setAttributes({target}) }
                />
                {pages !== undefined &&
                <SelectControl label="Page" value = { attributes.pageID }
                    options  = { pages.map((page)=>({ label: page.title, value: page.id }))}
                    onChange = { ID => { setAttributes({pageID : ID}) } }
                />
                }           
                <TextControl
                    label = "Button Text"
                    value = { attributes.text }
                    onChange = { ( text ) => setAttributes( {text} ) }
                />
            </div>
        </InspectorControls>
    )
}

export default Inspector;