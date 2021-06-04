import React from 'react'
import {ExpertiseSection, ExpertiseSectionText, ExpertiseSectionTitle, ExpertiseSectionTitleBar} from '../styles'
import {AreasImageContainer, AreasTextContainer} from '../../../style/containers'
import {AreasImage} from '../../../style/images'


const RightImageExpertise = ({imgAlt, imgSrc, sectionText, sectionTitle}) => {
    return (
        <ExpertiseSection>
            <AreasTextContainer>
                <ExpertiseSectionTitle>{sectionTitle}</ExpertiseSectionTitle>
                <ExpertiseSectionTitleBar />
                <ExpertiseSectionText>{sectionText}</ExpertiseSectionText>
            </AreasTextContainer>
            <AreasImageContainer>
                <AreasImage alt={imgAlt} src={imgSrc} />
            </AreasImageContainer>
        </ExpertiseSection>
    )
}

export default RightImageExpertise
