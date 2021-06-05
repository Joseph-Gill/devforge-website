import React from 'react'
import InfoText from './InfoText'
import ContactMe from './ContactMe'
import Footer from '../../components/Footer'
import AreaOfExpertise from './AreaOfExpertise'
import {ABOUT, AREAS, CONTACT} from '../../routes/paths'
import {javascriptDescription, pythonDescription, reactDescription} from '../../helpers'
import react from '../../assets/logos/react-logo-240px.svg'
import python from '../../assets/logos/python-logo-240px.svg'
import javaScript from '../../assets/logos/javascript-logo-240px.svg'
import {Title} from '../../style/titles'
import {WhiteLandingText} from '../../style/text'
import {PageContainer} from '../../style/containers'
import {BlackButton, TanButton} from '../../style/buttons'
import {AreasSection, InfoLeftContainer, LandingAreasContainer, LandingContactContainer, LandingInfoContainer,
    LandingQuoteContainer, LandingTitle, LandingTitleContainer, QuoteAuthor, QuoteText, UpperTitleContainer} from './styles'


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
                        I am a lifelong technology enthusiast with a passion for solving
                        technical challenges across the stack and writing clean and
                        readable code in compliance with industry best practices.
                    </h3>
                    <InfoText />
                    <BlackButton onClick={() => history.push(ABOUT)}>Learn More</BlackButton>
                </InfoLeftContainer>
                <ContactMe />
            </LandingInfoContainer>
            <LandingAreasContainer>
                <AreasSection>
                    <Title>Areas of Expertise</Title>
                </AreasSection>
                <AreaOfExpertise
                    imgAlt='javascript logo'
                    imgSrc={javaScript}
                    sectionText={javascriptDescription}
                    sectionTitle='JavaScript'
                />
                <AreaOfExpertise
                    imgAlt='python logo'
                    imgSrc={python}
                    sectionText={pythonDescription}
                    sectionTitle='Python'
                />
                <AreaOfExpertise
                    imgAlt='react logo'
                    imgSrc={react}
                    sectionText={reactDescription}
                    sectionTitle='React'
                />
                <TanButton onClick={() => history.push(AREAS)}>View All</TanButton>
            </LandingAreasContainer>
            <LandingQuoteContainer>
                <QuoteText>
                    &quot;I think it&apos;s fair to say that personal computers have become the most empowering tool we&apos;ve ever created.
                    They&apos;re tools of communication, they&apos;re tools of creativity, and they can be shaped by their user.&quot;
                </QuoteText>
                <QuoteAuthor>- Bill Gates</QuoteAuthor>
                <QuoteText>
                    &quot;Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century,
                    basic computer programming is an essential skill to learn.&quot;
                </QuoteText>
                <QuoteAuthor>- Stephen Hawking</QuoteAuthor>
            </LandingQuoteContainer>
            <LandingContactContainer>
                <Title>Get in Touch</Title>
                <WhiteLandingText>
                    I am open to discuss opportunities to work on both front and back-end development for either long or short term projects. If you
                    wish to discuss a potential opportunity with me, please feel free to contact me below. I look forward to hearing from you.
                </WhiteLandingText>
                <TanButton onClick={() => history.push(CONTACT)}>Contact Me</TanButton>
            </LandingContactContainer>
            <Footer />
        </PageContainer>
    )
}

export default Landing
