import { __ } from '@wordpress/i18n';
import { TextControl , SelectControl } from '@wordpress/components';
import {
    useBlockProps,
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';


const Inspector = ({value:{attributes,setAttributes}}) => {
    //Defaults
	const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];

    const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};

    return(
        <InspectorControls key="setting">
            <div id="gutenberg-blocks-controls">
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Background color', 'gutenberg-blocks' ) }
                    </legend>
                    <ColorPalette 
                        colors={ colors }
                        onChange={ onChangeBGColor }
                    />
                </fieldset>
                <fieldset>
                    <legend className="blocks-base-control__label">
                        { __( 'Text color', 'gutenberg-blocks' ) }
                    </legend>
                    <ColorPalette
                        colors={ colors } 
                        clearable = {true}
                        onChange={ onChangeTextColor }
                    />
                </fieldset>
                <SelectControl label="Alignment" value={ attributes.alignment }
                    options={ [
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
                        { label: 'Left', value: 'left' },
                    ] }
                    onChange={ alignment => setAttributes({alignment}) }
                />
                <SelectControl label="Target" value={ attributes.target }
                    options={ [
                        { label: 'Default', value: '' },
                        { label: 'New Window', value: '__target' },
                    ] }
                    onChange={ target => setAttributes({target}) }
                />
                <TextControl
                    label="Button Text"
                    // value={ className }
                    onChange={ ( text ) => setAttributes( {text} ) }
                />
            </div>
        </InspectorControls>
    )
}

export default Inspector;