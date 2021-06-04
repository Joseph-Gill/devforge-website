import React from 'react'
import {AreasImage} from '../../../style/images'
import {AreasImageContainer, AreasTextContainer} from '../../../style/containers'
import {ExpertiseSection, ExpertiseSectionText, ExpertiseSectionTitle, ExpertiseSectionTitleBar} from '../styles'



const LeftImageExpertise = ({imgAlt, imgSrc, sectionText, sectionTitle}) => {
    return (
        <ExpertiseSection>
            <AreasImageContainer>
                <AreasImage alt={imgAlt} src={imgSrc} />
            </AreasImageContainer>
            <AreasTextContainer>
                <ExpertiseSectionTitle>{sectionTitle}</ExpertiseSectionTitle>
                <ExpertiseSectionTitleBar />
                <ExpertiseSectionText>{sectionText}</ExpertiseSectionText>
            </AreasTextContainer>
        </ExpertiseSection>
    )
}

export default LeftImageExpertise
