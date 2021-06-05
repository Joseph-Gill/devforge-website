import styled from 'styled-components/macro'
import {rem} from 'polished'
import {device as devices} from '../../style/devices'


export const AboutTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: ${props => props.theme.primaryBlack};
    padding: ${rem('240px')} ${rem('60px')} ${rem('88px')} ${rem('60px')};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }
`

export const AboutDescriptionTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutDescriptionText = styled.p`
    width: 75%;
    font-size: ${rem('18px')};
    color: ${props => props.theme.white};
    margin-bottom: ${rem('30px')};
    line-height: ${rem('24px')};

    a {
        font-size: ${rem('18px')};
        color: ${props => props.theme.white};
        margin-left: ${rem('5px')};
    }
`
