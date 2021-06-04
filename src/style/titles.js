import styled from 'styled-components/macro'
import {rem} from 'polished'


export const Title = styled.h2`
    color: ${props => props.theme.white};
    font-size: ${rem('45px')};
    font-weight: 400;
    margin-bottom: ${rem('30px')};
`

export const TextSectionTitle = styled.h3`
    font-size: ${rem('28px')};
    color: ${props => props.theme.white};
    font-weight: 400;
    line-height: ${rem('40px')};
`
