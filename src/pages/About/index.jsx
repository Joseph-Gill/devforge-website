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
                        Nulla non hendrerit mi. Suspendisse potenti. Quisque nulla massa, fermentum ac scelerisque id, varius ac elit.
                        Quisque eget erat diam. Integer lacinia, massa sit amet posuere tristique, ante velit consectetur magna, id tristique
                        ipsum purus in dui. Ut venenatis pretium dolor nec accumsan. Donec bibendum, quam quis accumsan imperdiet, lorem erat
                        efficitur mauris, et ultricies sapien orci in dolor. Donec sollicitudin ante vel velit porttitor, vitae suscipit lectus
                        suscipit. Aliquam porta cursus ultrices. Duis varius eros dui, malesuada finibus urna hendrerit at. Curabitur nec
                        egestas lectus. Vivamus sagittis orci ac orci volutpat tincidunt. Sed vitae ipsum in lacus cursus vulputate ac vitae
                        tortor. Vestibulum ac orci leo. Ut aliquam pellentesque vulputate. Vestibulum sit amet est risus.
                    </AboutDescriptionText>
                    <AboutDescriptionText>
                        Nulla non hendrerit mi. Suspendisse potenti. Quisque nulla massa, fermentum ac scelerisque id, varius ac elit.
                        Quisque eget erat diam. Integer lacinia, massa sit amet posuere tristique, ante velit consectetur magna, id tristique
                        ipsum purus in dui. Ut venenatis pretium dolor nec accumsan. Donec bibendum, quam quis accumsan imperdiet, lorem erat
                        efficitur mauris, et ultricies sapien orci in dolor. Donec sollicitudin ante vel velit porttitor, vitae suscipit lectus
                        suscipit. Aliquam porta cursus ultrices. Duis varius eros dui, malesuada finibus urna hendrerit at. Curabitur nec
                        egestas lectus. Vivamus sagittis orci ac orci volutpat tincidunt. Sed vitae ipsum in lacus cursus vulputate ac vitae
                        tortor. Vestibulum ac orci leo. Ut aliquam pellentesque vulputate. Vestibulum sit amet est risus.
                    </AboutDescriptionText>
                </AboutDescriptionTextContainer>
            </AboutTopContainer>
            <Footer />
        </PageContainer>
    )
}

export default About
