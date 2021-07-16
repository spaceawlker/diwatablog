import React from 'react';
import { Link } from 'gatsby';
import styled, {css} from 'styled-components';
import typography from '../utils/typography'

const TableOfContentsRowStyle = css`
    display: block;
    width: 100%;
    & :hover {
        background-color: rgb(190, 190, 190);
        transition: background-color 0.2s;
    }
    transition: background-color 0.2s;
`;

const LinkToSection = styled(Link)`
    padding-left: ${({depth}) => depth}.5em;
    color: rgb(100, 100, 100);
    ${TableOfContentsRowStyle}
`;

const ScrollToTop = ({ className }) => {
    const clickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <a className={className} onClick={clickHandler}>Top of page</a>
    );
};

const StyledScrollToTop = styled(ScrollToTop)`
    padding-left: 0.5em;
    cursor: pointer;
    ${TableOfContentsRowStyle}
`;

const HeaderNavigator = ({ url, title, items, depth}) => {
    return (
        <nav>
            <LinkToSection href={url} depth={depth}>{title}</LinkToSection> 
            {items && items.map(({url, title, items}) => (
            <HeaderNavigator url={url} title={title} items={items} depth={depth+1}/>
            ))}
        </nav>
    )
};

const TableOfContents = ({ items, className }) => {
    return (
        <div className={className}>
            <p> Table of Contents </p>
            <StyledScrollToTop /> 
            <nav>
            {items && 
                items.map(({url, items, title}) => (
                    <HeaderNavigator url={url} items={items} title={title} depth={0}/>
                ))
            }
            </nav>
        </div>
    )
};

const StyledTableOfContents = styled(TableOfContents)`
    padding: ${typography.rhythm(1)};
    overflow-y: scroll;
    position: sticky;
    top: 3rem;
    align-self: start;
`;

export default StyledTableOfContents