import React from 'react'
import Footer from '../../components/Footer'
import LeftImageExpertise from './LeftImageExpertise'
import RightImageExpertise from './RightImageExpertise'
import {AREAS} from '../../routes/paths'
import {djangoDescription, dockerDescription, javascriptDescription, pythonDescription, reactDescription, reduxDescription} from '../../helpers'
import react from '../../assets/logos/react-logo-240px.svg'
import redux from '../../assets/logos/redux-logo-240px.svg'
import python from '../../assets/logos/python-logo-240px.svg'
import django from '../../assets/logos/django-logo-240px.svg'
import docker from '../../assets/logos/docker-loco-240px.svg'
import javaScript from '../../assets/logos/javascript-logo-240px.svg'
import {PageContainer} from '../../style/containers'
import {AreasListContainer, AreasTitle, AreasTitleContainer, TitleDivider} from './styles'


const Areas = () => {
    return (
        <PageContainer>
            <AreasTitleContainer>
                <AreasTitle>Areas of Expertise</AreasTitle>
                <TitleDivider />
            </AreasTitleContainer>
            <AreasListContainer>
                <LeftImageExpertise
                    imgAlt='javascript logo'
                    imgSrc={javaScript}
                    sectionText={javascriptDescription}
                    sectionTitle='JavaScript'
                />
                <RightImageExpertise
                    imgAlt='python logo'
                    imgSrc={python}
                    sectionText={pythonDescription}
                    sectionTitle='Python'
                />
                <LeftImageExpertise
                    imgAlt='react logo'
                    imgSrc={react}
                    sectionText={reactDescription}
                    sectionTitle='React'
                />
                <RightImageExpertise
                    imgAlt='redux logo'
                    imgSrc={redux}
                    sectionText={reduxDescription}
                    sectionTitle='Redux'
                />
                <LeftImageExpertise
                    imgAlt='django logo'
                    imgSrc={django}
                    sectionText={djangoDescription}
                    sectionTitle='Django DRF'
                />
                <RightImageExpertise
                    imgAlt='docker logo'
                    imgSrc={docker}
                    sectionText={dockerDescription}
                    sectionTitle='Docker'
                />
            </AreasListContainer>
            <Footer componentCalling={AREAS}/>
        </PageContainer>
    )
}

export default Areas
