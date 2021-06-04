import React from 'react'
import {AreasImage} from '../../../style/images'
import {TextSectionText} from '../../../style/text'
import {TextSectionTitle} from '../../../style/titles'
import {AreasImageContainer, AreasTextContainer, TitleBar} from '../../../style/containers'
import {AreasSection} from '../styles'


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
