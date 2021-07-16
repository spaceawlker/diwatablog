import React from 'react';
import typography from '../utils/typography';
import styled, { createGlobalStyle } from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
html, body {
    vertical-align: baseline;
    & a {
        text-decoration: none;
    }
    scroll-behavior: smooth;
}
`;

const ContentStyles = styled.main`
    background-color: rgb(210, 210, 210);
    padding-top: ${typography.rhythm(1)}
`;

export const Layout = ({ children }) => {
    const {title, description} = useSiteMetadata();
    return (
        <>
            <GlobalStyle />
            <Header siteTitle={title} siteDescription={description} />
            <ContentStyles>
                {children}
            </ContentStyles>
        </>
    )
}