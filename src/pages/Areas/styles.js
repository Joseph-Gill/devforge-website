import styled from 'styled-components/macro'
import {rem} from 'polished'
import {AreasSection} from '../Landing/styles'
import {TextSectionTitle} from '../../style/titles'
import {TextSectionText} from '../../style/text'
import {TitleBar} from '../../style/containers'
import {device as devices} from '../../style/devices'


export const ExpertiseSection = styled(AreasSection)`
    border-bottom: ${rem('1px')} solid ${props => props.theme.primaryBlack};
`

export const ExpertiseSectionTitle = styled(TextSectionTitle)`
    color: ${props => props.theme.primaryBlack};
`

export const ExpertiseSectionText = styled(TextSectionText)`
    color: ${props => props.theme.primaryBlack};
`

export const ExpertiseSectionTitleBar = styled(TitleBar)`
    border-bottom: ${rem('3px')} solid ${props => props.theme.primaryBlack};
`

export const AreasTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: ${rem('370px')};
    background: ${props => props.theme.primaryTan};
    padding: ${rem('240px')} ${rem('60px')} 0 ${rem('60px')};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }
`

export const AreasTitle = styled.h2`
    font-size: ${rem('60px')};
    font-weight: 400;
`

export const TitleDivider = styled.div`
    width: 63%;
    height: ${rem('2px')};
    border-bottom: ${rem('2px')} solid ${props => props.primaryBlack};
    margin-top: ${rem('50px')};
`

export const AreasListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme.primaryTan};
    padding: 0 ${rem('125px')} ${rem('88px')} ${rem('125px')};

    @media ${devices.laptopL} {
        padding-left: ${rem('325px')};
    }

    div:last-child {
        border-bottom: none;
    }
`
