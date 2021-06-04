import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {rem} from 'polished'


export const PageHeader = styled.div `
    width: 100%;
    height: ${props => props.header ? `${rem('150px')}` : `${rem('80px')}`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.colorflip ? props.theme.primaryTan : props.theme.primaryBlack};
    position: fixed;
    padding: 0 ${rem('150px')} 0 ${rem('40px')};
    -webkit-transition: height 1s ease, background-color .5s ease;
`

export const HeaderLogoTitleContainer = styled.div`
    width: ${props => props.header ? `${rem('325px')}` : `${rem('275px')}`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-transition: width 1s ease;

    :hover {
        cursor: pointer;
    }
`

export const HeaderLogo = styled.img`
    width: auto;
    height: ${props => props.header ? `${rem('100px')}` : `${rem('50px')}`};
    -webkit-transition: width 1s ease, height 1s ease;
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0.5s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`

export const HeaderTitle = styled.h2`
    font-family: ${props => props.theme.sourceCodeFontFamily};
    color: ${props => props.colorflip ? props.theme.primaryBlack : props.theme.white};
    font-size: ${rem('30px')}
`

export const HeaderLinksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: ${rem('500px')};
    height: ${rem('60px')};
    border: ${props => props.header ? props.colorflip ? `${rem('2px')} solid ${props.theme.primaryBlack}` : `${rem('2px')} solid ${props.theme.white}` : 'none'};
    border-radius: 2rem;
    padding: ${rem('20px')} ${rem('20px')} 0 ${rem('20px')};
`

export const HeaderLink = styled(Link)`
    text-decoration: none;
    height: ${rem('25px')};
    font-size: ${rem('14px')};
    font-weight: 600;
    color: ${props => props.colorflip ? props.theme.primaryBlack : props.theme.white};

    ${props => {
        if(props.isactive){
            return `
                    border-bottom: solid ${rem('3px')} ${props.colorflip ? props.theme.primaryBlack : props.theme.white};
                    font-weight: bold;
                    `
            }
        }
    };
`
