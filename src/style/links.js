import styled from 'styled-components/macro'
import {rem} from 'polished'


export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.white};
    text-decoration: none;

    span {
        margin-left: ${rem('10px')};
        margin-bottom: 0;
        font-size: ${rem('18px')};
        color: ${props => props.theme.white};
    }

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const BlackLinkContainer = styled(LinkContainer)`
    color: ${props => props.theme.black};

    span {
        color: ${props => props.theme.black};
    }
`
