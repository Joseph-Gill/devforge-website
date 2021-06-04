import styled from 'styled-components/macro'
import {rem} from 'polished'


export const LinkContainer = styled.a`
    display: flex;
    align-items: center;

    span {
        margin-left: ${rem('10px')};
        font-size: ${rem('16px')};
        color: ${props => props.theme.white};
    }

    :hover {
        cursor: pointer;
    }
`
