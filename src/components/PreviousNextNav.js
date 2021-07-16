import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import typography from '../utils/typography';

const SplitNav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const StyledNavText = styled.p`
    margin: 0;
    padding: ${typography.rhythm(0.5)} 1em;
`;

const NavLink = ({ tag, text, link, className }) => {
    return ( 
    <Link to={link} className={className}>
        <StyledNavText> {tag} </StyledNavText>
        <StyledNavText> {text} </StyledNavText>
    </Link>
    )
};

const StyledNavLink = styled(NavLink)`
    text-align: ${props => props.textAlign};
    color: black;
    border-radius: 10px;
    transition: background-color 0.2s;
    & :hover {
        background-color: rgb(230, 230, 230);
        text-decoration: underline;
        transition: background-color 0.2s;
    }
`;

const PreviousNextNav = ({ previous, next }) => {
    return (
        <SplitNav>
            {previous &&
                <StyledNavLink 
                    tag="Previous"
                    text={previous.frontmatter.title}
                    link={previous.fields.slug} 
                    textAlign="left"/>
            }
            <span style={{'flex-grow': 1}} />
            {next &&
                <StyledNavLink 
                    tag="Next"
                    text={next.frontmatter.title}
                    link={next.fields.slug} 
                    textAlign="right"/>
            }
        </SplitNav>
    )
};

export default PreviousNextNav;