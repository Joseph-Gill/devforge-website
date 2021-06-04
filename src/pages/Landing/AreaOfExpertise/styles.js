import styled from 'styled-components/macro'
import {rem} from 'polished'


export const AreasImageContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const AreasImage = styled.img`
    width: auto;
    height: 200px;
`

export const AreasTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rem('800px')};
    padding: ${rem('20px')};
    margin-bottom: ${rem('100px')};
`

export const TextSectionTitle = styled.h3`
    font-size: ${rem('28px')};
    color: ${props => props.theme.white};
    font-weight: 400;
    line-height: ${rem('40px')};
`

export const TitleBar = styled.div`
    height: ${rem('3px')};
    width: ${rem('40px')};
    border-bottom: ${rem('3px')} solid ${props => props.theme.white};
    margin-bottom: ${rem('20px')};
`

export const TextSectionText = styled.p`
    color: ${props => props.theme.white};
`
