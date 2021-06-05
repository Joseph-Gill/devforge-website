import styled from 'styled-components/macro'
import {rem} from 'polished'
import {device as devices} from '../../style/devices'
import {AREAS} from '../../routes/paths'


export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.primaryTan};
    padding: ${props => props.theme.landingPadding};
    border-top: ${props => props.componentCalling === AREAS ? `1px solid ${props.theme.primaryBlack}` : 'none'};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }

    h4 {
        font-family: ${props => props.theme.latoFontFamily};
        font-weight: 400;
        font-size: ${rem('28px')};
        margin-bottom: ${rem('40px')};
    }
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${rem('500px')};

    p {
        font-size: ${rem('20px')};
        margin-bottom: ${rem('20px')};
    }
`
