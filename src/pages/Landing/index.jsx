import React from 'react'
import InfoText from './InfoText'
import AreaOfExpertise from './AreaOfExpertise'
import {ABOUT, AREAS, CONTACT} from '../../routes/paths'
import javaScript from '../../assets/logos/javascript-logo-240px.svg'
import react from '../../assets/logos/react-logo-240px.svg'
import python from '../../assets/logos/python-logo-240px.svg'
import {Title} from '../../style/titles'
import {WhiteLandingText} from '../../style/text'
import {PageContainer} from '../../style/containers'
import {BlackButton, TanButton} from '../../style/buttons'
import {
    AreasSection, InfoLeftContainer, InfoRightContainer, LandingAreasContainer, LandingContactContainer, LandingInfoContainer,
    LandingQuoteContainer, LandingTitle, LandingTitleContainer, QuoteAuthor, QuoteText, UpperTitleContainer
} from './styles'


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
                    <BlackButton onClick={() => history.push(ABOUT)}>Learn More</BlackButton>
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
                <AreasSection>
                    <Title>Areas of Expertise</Title>
                </AreasSection>
                <AreaOfExpertise
                    imgAlt='javascript logo'
                    imgSrc={javaScript}
                    sectionText='JavaScript is a scripting or programming language that allows you to implement complex features on
                            web pages. JavaScript is used with HTML and CSS as one of the core standard web technologies. It
                            is currently used on 95% of the worlds 1.6 billion web sites.'
                    sectionTitle='JavaScript'
                />
                <AreaOfExpertise
                    imgAlt='python logo'
                    imgSrc={python}
                    sectionText='Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. It is
                            often used as a scripting language for web applications, meaning it can automate specific series of tasks,
                            making it more efficient. Python is often used in software applications, web pages, shells of operating
                            systems and some games.'
                    sectionTitle='Python'
                />
                <AreaOfExpertise
                    imgAlt='react logo'
                    imgSrc={react}
                    sectionText='React is an open-source JavaScript library, developed by FaceBook, that is used for building user interfaces
                            for single-page applications. React allows for the creation of reusable components and large web applications
                            that can change data without reloading the page. Its main purpose is to be fast, scalable, and simple.'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar mauris. Fusce malesuada viverra tempus.
                    Pellentesque semper molestie elit, ac tempor tortor. Sed est urna, finibus eget convallis vitae, venenatis id libero.
                    Nullam eget nisi eget tortor finibus cursus. Nunc id tellus massa. Nulla eu erat ut lorem dictum convallis at non ligula.
                    Ut mattis sollicitudin sodales. Aliquam erat volutpat. Aliquam aliquam id orci id vehicula.
                </WhiteLandingText>
                <TanButton onClick={() => history.push(CONTACT)}>Contact Me</TanButton>
            </LandingContactContainer>
        </PageContainer>
    )
}

export default Landing
