import styled from 'styled-components/macro'
import {rem} from 'polished'


export const LandingTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: ${rem('570px')};
    background: ${props => props.theme.primaryBlack};
    padding: ${rem('240px')} ${rem('60px')} ${rem('88px')} ${rem('60px')};
`

export const LandingTitle = styled.h1`
    font-family: ${props => props.theme.latoFontFamily};
    color: ${props => props.theme.white};
    font-size: ${rem('90px')};
`

export const UpperTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    ${LandingTitle} {
        margin-right: ${rem('40px')};
    }
`

export const LandingInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: ${rem('760px')};
    background: ${props => props.theme.primaryTan};
    padding: ${rem('88px')} ${rem('60px')};
`

export const InfoLeftContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-family: ${props => props.theme.latoFontFamily};
        font-size: ${rem('38px')};
        font-weight: 400;
        line-height: ${rem('50px')};
        width: ${rem('1000px')};
        margin-bottom: ${rem('30px')};
    }
`

export const InfoRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: ${rem('20px')};

    h2 {
        margin-bottom: ${rem('20px')};
        font-size: ${rem('22px')};
    }

    span {
        margin-bottom: ${rem('20px')};
        font-size: ${rem('18px')};
    }

    p {
        margin-bottom: ${rem('10px')};
        font-size: ${rem('18px')};
    }
`
