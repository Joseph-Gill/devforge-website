import styled from 'styled-components/macro'
import {rem} from 'polished'


export const LandingText = styled.p`
    font-size: ${rem('18px')};
    margin-bottom: ${rem('5px')};
    width: ${rem('1000px')};
    margin-bottom: ${rem('20px')};
`

export const WhiteLandingText = styled(LandingText)`
    color: ${props => props.theme.white};
`

export const TextSectionText = styled.p`
    color: ${props => props.theme.white};
`
