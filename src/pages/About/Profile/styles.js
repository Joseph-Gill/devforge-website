import styled from 'styled-components/macro'
import {rem} from 'polished'


export const TopLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export const LinkedInGitHubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${rem('220px')};
    margin-top: ${rem('30px')};
`
