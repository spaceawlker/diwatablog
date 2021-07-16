import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import typography from '../utils/typography';
import Code from './Code';

const headerStyle = css`
    width: 100%;
    padding: ${typography.rhythm(0.5)} 0.5em;
    & > a {
        margin-bottom: 0;
        & :hover {
            text-decoration: underline;
            & ::after {
                content: "  🔗";
                translate: translateX(-2rem);
                position: absolute:
                font-size: 0.5rem;
                bottom: 12.5px;
            }
        }
    }
`;

const HeaderLink = styled.h2`
    margin: ${typography.rhythm(1)} 0;
    border-bottom: 2px solid rgb(12, 69, 48);
    ${headerStyle}
    & > a {
        color: rgb(12, 69, 48);
    }
`;

const SubheaderLink = styled.h3`
    margin: ${typography.rhythm(0.5)} 0;
    & > a {
        color: black;
    }
    ${headerStyle}
`;

const Blockquote = styled.blockquote`
    border-left: 1px solid black;
    background-color: rgb(240, 240, 240);
    padding-left: 1em;
`;

const components = {
    h2: ({ children, id }) => {
        return (
        <HeaderLink id={id}>
            <Link to={`#${id}`}>{children}</Link>
        </HeaderLink>
    )},
    h3: ({ children, id }) => {
        return (
        <SubheaderLink id={id}>
            <Link to={`#${id}`}>{children}</Link>
        </SubheaderLink>
    )},
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray',
                       fontFamily: 'Inconsolata'}} {...props} />
    ),
    blockquote: ({ children }) => (
        <Blockquote>{children}</Blockquote>
    ),
    pre: ({ children: { props }}) => {
        if (props.mdxType === "code") {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            )
        }
    }
};

export default components;