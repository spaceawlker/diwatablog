import { Link } from 'gatsby';
import typography, { rhythm } from '../utils/typography';
import styled from 'styled-components';
import React, {useEffect} from 'react';

const HeaderWrapper = styled.header`
    background-color: rgb(29, 110, 80);
    display: flex;
    position: sticky;
    top: 0;
    color: white;
    z-index: 1;
`;

const LogoLink = styled(Link)`
    background-color: rgb(12, 69, 48);
    color: white;
    padding-bottom: ${typography.rhythm(0.5)};
    padding-top: ${typography.rhythm(0.5)};
    padding-right: 1em;
    padding-left: 1em;
    margin-bottom: 0;
    margin-top: 0;
`;

const H1 = styled.h1`
    margin-bottom: 0;
`;

const Description = styled.p`
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1em;
    margin-left: 1em;
`;

const FlexboxSpacer = styled.div`
    flex-grow: 1;
`;

const SiteLink = styled(Link)`
    color: white;
    padding: ${typography.rhythm(0.5)} ${typography.rhythm(1)};
    margin-bottom: 0;
    margin-top: 0;
`;

export const Header = ({ siteTitle, siteDescription }) => {
    return (
        <HeaderWrapper>        
            <LogoLink to="/">
                <H1>{siteTitle}</H1>
            </LogoLink>
            <Description>{siteDescription}</Description>
            <FlexboxSpacer /> {/* divider between right and left sides */}
            <SiteLink to="/about"> About </SiteLink>
        </HeaderWrapper>

    );
};