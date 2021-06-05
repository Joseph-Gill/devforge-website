import styled from 'styled-components/macro'
import {rem} from 'polished'


export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const AreasImageContainer = styled.div`
    display: flex;
    align-items: center;
`

export const AreasTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rem('800px')};
    padding: ${rem('20px')};
`

export const TitleBar = styled.div`
    height: ${rem('3px')};
    width: ${rem('40px')};
    border-bottom: ${rem('3px')} solid ${props => props.theme.white};
    margin-bottom: ${rem('20px')};
`

export const ProfileImageContainer = styled.div`
    width: ${rem('275px')};
    height: ${rem('275px')};
`
