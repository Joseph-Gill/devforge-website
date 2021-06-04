import styled from 'styled-components/macro'
import {rem} from 'polished'


export const Title = styled.h2`
    color: ${props => props.theme.white};
    font-size: ${rem('45px')};
    font-weight: 400;
    margin-bottom: ${rem('30px')};
`
