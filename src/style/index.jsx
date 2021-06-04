import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: ${props => props.theme.robotoFontFamily};
        box-sizing: border-box;
        color: rgba(0,0,0,0.92);
        /* Styles scroll bar for Firefox */
        scrollbar-width: thin;
        scrollbar-color: ${props => props.theme.grayTwo}, ${props => props.theme.grayFive};
        /* width */
        ::-webkit-scrollbar {
            height: 6px;
            width: 6px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: ${props => props.theme.grayFive};
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            border-radius: 6px;
            background: ${props => props.theme.grayTwo};
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${props => props.theme.grayOne};
        }
    }
`

export const defaultTheme = {
    // Colors
    primaryBlack: '#2A2829',
    secondaryBlack: '#2a2928',
    primaryTan: '#E0E0DB',
    grayOne: '#3A3B3F',
    grayTwo: '#949A9F',
    grayFive: '#F6F7F8',
    colorSuccess: '#10a711',
    colorFail: '#d60801',
    white: '#FFFFFF',
    fadedWhite: 'rgba(255,255,255,0.1)',
    black: '#000000',
    // CSS Styles
    boxShadow: '-5px 6px 15px -5px rgba(0,0,0,0.49)',
    borderRadius: '6px',
    buttonBoxShadow: '0 6px 12px rgba(0, 112, 159, 0.24)',
    // Fonts
    sourceCodeFontFamily: 'Source Code Pro, mono space',
    robotoFontFamily: 'Roboto, sans-serif',
    latoFontFamily: 'Lato, sans-serif',
}
