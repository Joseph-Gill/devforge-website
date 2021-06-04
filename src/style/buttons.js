import styled from 'styled-components/macro'
import {rem} from 'polished'


export const InfoButton = styled.button`
    width: ${rem('160px')};
    height: ${rem('60px')};
    border-radius: 2rem;
    font-weight: 400;
    background: ${props => props.theme.secondaryBlack};
    color: ${props => props.theme.white};
    border: none;
    box-shadow: ${props => props.theme.buttonBoxShadow};

    :hover {
        cursor: pointer;
        font-weight: 600;
    }

    :active {
        outline: none;
        transform: translateY(2px);
    }
`
