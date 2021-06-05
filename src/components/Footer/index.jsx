import React from 'react'
import {BottomContainer, FooterContainer} from './styles'


const Footer = ({componentCalling}) => {
    return (
        <FooterContainer componentCalling={componentCalling}>
            <h4>Joseph Gill</h4>
            <BottomContainer>
                <div>
                    <p>Chester, Cheshire</p>
                    <p>England, UK</p>
                </div>
                <div>
                    <p>+44 7735 180477</p>
                    <a href='mailto:devforgeuk@gmail.com'>devforgeuk@gmail.com</a>
                </div>
            </BottomContainer>
        </FooterContainer>
    )
}

export default Footer
