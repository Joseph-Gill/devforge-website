import React from 'react'
import linkedIn from '../../../assets/icons/linkedin_icon.svg'
import github from '../../../assets/icons/github-icon-tan.svg'
import joseph from '../../../assets/profiles/joseph_profile.png'
import {LinkContainer} from '../../../style/links'
import {ProfileImage} from '../../../style/images'
import {ProfileImageContainer} from '../../../style/containers'
import {LinkedInGitHubContainer, TopLeftContainer} from './styles'


const Profile = () => {
    return (
        <TopLeftContainer>
            <ProfileImageContainer>
                <ProfileImage alt='joseph profile' src={joseph} />
            </ProfileImageContainer>
            <LinkedInGitHubContainer>
                <LinkContainer href='https://www.linkedin.com/in/josephedwingill/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedIn} />
                    <span>LinkedIn</span>
                </LinkContainer>
                <LinkContainer href='https://github.com/Joseph-Gill' rel='noopener noreferrer' target='_blank'>
                    <img alt='github' src={github} />
                    <span>Github</span>
                </LinkContainer>
            </LinkedInGitHubContainer>
        </TopLeftContainer>
    )
}

export default Profile
