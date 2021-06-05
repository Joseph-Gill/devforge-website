import styled from 'styled-components/macro'
import {rem} from 'polished'


export const InfoRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: ${rem('20px')};


    h2 {
        margin-bottom: ${rem('20px')};
        font-size: ${rem('26px')};
    }

    h5 {
        margin-bottom: ${rem('20px')};
        font-size: ${rem('20px')};
        font-weight: 400;
    }

    p {
        margin-bottom: ${rem('10px')};
        font-size: ${rem('20px')};
    }

    a {
        font-size: ${rem('20px')};
        margin-bottom: ${rem('10px')};
        text-decoration: none;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`
