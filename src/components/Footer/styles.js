import styled from 'styled-components/macro'
import {rem} from 'polished'


export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.primaryTan};
    padding: ${props => props.theme.landingPadding};

    h4 {
        font-family: ${props => props.theme.latoFontFamily};
        font-weight: 400;
        font-size: ${rem('24px')};
        margin-bottom: ${rem('40px')};
    }
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${rem('500px')};

    p {
        font-size: ${rem('18px')};
        margin-bottom: ${rem('20px')};
    }
`
