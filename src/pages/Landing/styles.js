import styled from 'styled-components/macro'
import {rem} from 'polished'
import {device as devices} from '../../style/devices'


export const LandingTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
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
    justify-content: space-between;
    width: 100%;
    background: ${props => props.theme.primaryTan};
    padding: ${props => props.theme.landingPadding};

    @media ${devices.laptopL} {
        justify-content: flex-start;
        padding-left: ${rem('325px')};
    }
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
        font-size: ${rem('26px')};
    }

    span {
        margin-bottom: ${rem('20px')};
        font-size: ${rem('20px')};
    }

    p {
        margin-bottom: ${rem('10px')};
        font-size: ${rem('20px')};
    }
`

export const AreasSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
    min-height: ${rem('100px')};
    border-bottom: ${rem('2px')} solid ${props => props.theme.primaryTan};
`

export const LandingAreasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background: ${props => props.theme.primaryBlack};
    padding: ${props => props.theme.landingPadding};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }
`

export const QuoteAuthor = styled.p`
    font-size: ${rem('18px')};
`

export const LandingQuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${props => props.theme.landingPadding};
    background: ${props => props.theme.primaryTan};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }

    ${QuoteAuthor}:nth-child(2) {
        margin-bottom: ${rem('30px')};
    }
`

export const QuoteText = styled.h2`
    font-family: ${props => props.theme.latoFontFamily};
    font-size: ${rem('40px')};
    font-weight: 200;
    width: 65%;
    margin-bottom: ${rem('30px')};
`

export const LandingContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${props => props.theme.landingPadding};
    background: ${props => props.theme.primaryBlack};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }
`
