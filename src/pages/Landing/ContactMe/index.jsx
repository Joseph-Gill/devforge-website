import React from 'react'
import linkedIn from '../../../assets/icons/linkedin_icon.svg'
import {BlackLinkContainer} from '../../../style/links'
import {InfoRightContainer} from './styles'



const ContactMe = () => {
    return (
        <InfoRightContainer>
            <h2>Contact Me</h2>
            <h5>Joseph Gill</h5>
            <p>Chester, Cheshire</p>
            <h5>England, UK</h5>
            <a href='mailto:devforgeuk@gmail.com'>devforgeuk@gmail.com</a>
            <h5>+44 7735 180477</h5>
            <BlackLinkContainer href='https://www.linkedin.com/in/josephedwingill/' rel='noopener noreferrer' target='_blank'>
                <img alt='linkedIn' src={linkedIn} />
                <span>LinkedIn</span>
            </BlackLinkContainer>
        </InfoRightContainer>
    )
}

export default ContactMe
