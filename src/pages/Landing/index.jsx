import React from 'react'
import {rem} from 'polished'
import styled from 'styled-components/macro'
import InfoText from './InfoText'
import {ABOUT} from '../../routes/paths'
import {InfoButton} from '../../style/buttons'
import {PageContainer} from '../../style/containers'
import {InfoLeftContainer, InfoRightContainer, LandingInfoContainer, LandingTitle, LandingTitleContainer, UpperTitleContainer} from './styles'


const LandingAreasContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${rem('1000px')};
    background: ${props => props.theme.primaryBlack};
`

const Landing = ({history}) => {
    return (
        <PageContainer>
            <LandingTitleContainer>
                <UpperTitleContainer>
                    <LandingTitle>Full Stack Development</LandingTitle>
                    <LandingTitle>+</LandingTitle>
                </UpperTitleContainer>
                <LandingTitle>Software Developer Consulting</LandingTitle>
            </LandingTitleContainer>
            <LandingInfoContainer>
                <InfoLeftContainer>
                    <h3>
                        A lifelong technology enthusiast with a passion for solving
                        technical challenges across the stack and writing clean and
                        readable code in compliance with industry best practices.
                    </h3>
                    <InfoText />
                    <InfoButton onClick={() => history.push(ABOUT)}>Learn More</InfoButton>
                </InfoLeftContainer>
                <InfoRightContainer>
                    <h2>Contact Me</h2>
                    <span>Joseph Gill</span>
                    <p>Chester, Cheshire</p>
                    <span>England, UK</span>
                    <p>devforgeuk@gmail.com</p>
                    <span>+44 7735 180477</span>
                </InfoRightContainer>
            </LandingInfoContainer>
            <LandingAreasContainer>

            </LandingAreasContainer>
        </PageContainer>
    )
}

export default Landing
