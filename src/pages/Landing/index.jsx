import React from 'react'
import {rem} from 'polished'
import styled from 'styled-components/macro'
import {PageContainer} from '../../style/containers'


const LandingTitleContainer = styled.div`
    width: 100%;
    height: ${rem('570px')};
    background: ${props => props.theme.primaryBlack};
    padding-top: ${rem('150px')};
`

const LandingTitle = styled.h1`
    font-family: ${props => props.theme.latoFontFamily};
    color: ${props => props.theme.white};
`

const Landing = () => {
    return (
        <PageContainer>
            <LandingTitleContainer>
                <LandingTitle>Software Developer Consultant</LandingTitle>
                <LandingTitle>Full Stack Developer</LandingTitle>
            </LandingTitleContainer>

        </PageContainer>
    )
}

export default Landing
