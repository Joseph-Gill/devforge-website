import styled from 'styled-components/macro'
import {rem} from 'polished'


export const LandingText = styled.p`
    font-size: ${rem('20px')};
    margin-bottom: ${rem('5px')};
    width: ${rem('1000px')};
    margin-bottom: ${rem('20px')};
`

export const WhiteLandingText = styled(LandingText)`
    color: ${props => props.theme.white};
    font-size: ${rem('20px')};
`

export const TextSectionText = styled.p`
    color: ${props => props.theme.white};
    font-size: ${rem('20px')};
`
