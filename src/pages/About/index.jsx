import React from 'react'
import {rem} from 'polished'
import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'
import Profile from './Profile'
import Footer from '../../components/Footer'
import {PageContainer} from '../../style/containers'
import {AboutDescriptionText, AboutDescriptionTextContainer, AboutTopContainer} from './styles'




const About = () => {
    return (
        <PageContainer>
            <AboutTopContainer>
                <Profile />
                <AboutDescriptionTextContainer>
                    <AboutDescriptionText>
                        I am a US citizen who grew up in Ohio and moved to Chicago, Illinois before traveling abroad. I currently residing with my wife
                        in the United Kingdom. We moved to the United Kingdom in early 2021 after living in Zurich, Switzerland for four years. The experiences
                        of living abroad has given me the opportunity to interact and work along side a wide variety of different people and cultures.
                    </AboutDescriptionText>
                    <AboutDescriptionText>
                        I developed a passion for technology at a young age in spending time building computers and solving puzzles with my father. I worked in
                        Retail Management for more than fifteen years leading teams with a focus on providing an excellent customer experience. While in Switzerland,
                        I decided to pursue my passion for technology and did so by attending the Full Stack program at
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <a href='https://propulsion.academy/' rel='noopener noreferrer' target='_blank'>Propulsion Academy</a>.
                    </AboutDescriptionText>
                    <AboutDescriptionText>
                        As a Full Stack and Software Developer Consultant I have worked on several small projects as well as large projects such as building a prototype
                        application for a Tax Advisory start-up. Below you can find projects I have developed with links to my Github repo where the code is hosted. If
                        the project is current deployed there will be links to the website as well.
                    </AboutDescriptionText>
                </AboutDescriptionTextContainer>
            </AboutTopContainer>
            <Footer />
        </PageContainer>
    )
}

export default About
