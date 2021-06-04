import React, {useEffect, useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import hammerAnvilWhite from '../../assets/icons/white_hammer_150px.svg'
import hammerAnvilBlack from '../../assets/icons/black_hammer_150px.svg'
import {ABOUT, AREAS, CONTACT, FAMILY, LANDING} from '../../routes/paths'
import {HeaderLink, HeaderLinksContainer, HeaderLogo, HeaderLogoTitleContainer, HeaderTitle, PageHeader} from './styles'


const Header = ({children}) => {
    let location = useLocation()
    const history = useHistory()
    const [header, setHeader] = useState(true)
    const [colorFlip, setColorFlip] = useState(false)

    const listenForScrollEvent = () => {
        if (window.scrollY < 73) {
            return setHeader(true)
        } else if (window.scrollY > 70) {
            return setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenForScrollEvent)

        return () => window.removeEventListener('scroll', listenForScrollEvent)
    }, [])

    useEffect(() => {
        setColorFlip(location.pathname === AREAS)
    }, [location])


    return (
        <>
            <PageHeader
                colorflip={colorFlip ? 1 : 0}
                header={header}
            >
                <HeaderLogoTitleContainer
                    header={header}
                    onClick={() => history.push(LANDING)}
                >
                    <HeaderLogo alt='devforge logo' header={header} src={colorFlip ? hammerAnvilBlack : hammerAnvilWhite} />
                    <HeaderTitle colorflip={colorFlip ? 1 : 0}>&lt;DevForge /&gt;</HeaderTitle>
                </HeaderLogoTitleContainer>
                <HeaderLinksContainer colorflip={colorFlip ? 1 : 0} header={header}>
                    <HeaderLink colorflip={colorFlip ? 1 : 0} isactive={location.pathname === ABOUT ? 1 : 0} to={ABOUT}>About</HeaderLink>
                    <HeaderLink colorflip={colorFlip ? 1 : 0} isactive={location.pathname === AREAS ? 1 : 0} to={AREAS}>Areas of Expertise</HeaderLink>
                    <HeaderLink colorflip={colorFlip ? 1 : 0} isactive={location.pathname === FAMILY ? 1 : 0} to={FAMILY}>My Family</HeaderLink>
                    <HeaderLink colorflip={colorFlip ? 1 : 0} isactive={location.pathname === CONTACT ? 1 : 0} to={CONTACT}>Contact Me</HeaderLink>
                </HeaderLinksContainer>
            </PageHeader>
            {children}
        </>
    )
}

export default Header
