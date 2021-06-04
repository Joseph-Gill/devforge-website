import React from 'react'
import {AreasSection} from '../styles'
import {AreasImage, AreasImageContainer, AreasTextContainer, TextSectionText, TextSectionTitle, TitleBar} from './styles'


const AreaOfExpertise = ({imgAlt, imgSrc, sectionTitle, sectionText}) => {
    return (
        <AreasSection>
            <AreasImageContainer>
                <AreasImage alt={imgAlt} src={imgSrc} />
            </AreasImageContainer>
            <AreasTextContainer>
                <TextSectionTitle>{sectionTitle}</TextSectionTitle>
                <TitleBar />
                <TextSectionText>{sectionText}</TextSectionText>
            </AreasTextContainer>
        </AreasSection>
    )
}

export default AreaOfExpertise
