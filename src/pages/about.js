import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Layout }  from '../components/Layout';
import { PostTitle } from '../components/PostPreview';
import mdxShortcodes from '../components/MDXStyling';

import PostPreview from '../components/PostPreview';
import typography from '../utils/typography';

const AboutWrapper = styled.main`
    width: 60%;
    margin: auto;
    background-color: white;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: ${typography.rhythm(2)};
    padding-bottom: ${typography.rhythm(2)};
`;

const H2 = mdxShortcodes.h2;

const AboutPage = () => {
    return (
        <Layout>
            <AboutWrapper>
                <PostTitle> About This Site </PostTitle>
                <p>
                    I like doing algorithmic problem solving, and through
                    this blog, I hope to get you to think the same.
                </p>
                <p>
                    I want to explore what exactly is it I like about
                    problem solving, what would probably get you into it,
                    and what you'd need to know and remember to make
                    the most of your time doing it.
                </p>
                <PostTitle> About The Author </PostTitle>
                <p>
                    I'll have you know I graduated top of my class
                    in the NOI.PH, and I've been involved in numerous
                    secret competitions on Quezon City, and I have over
                    500 confirmed solves.
                </p>
                <PostTitle> Contact Me </PostTitle>
                I am in the NOI.PH Training Discord server; if you want to
                talk to me about stuff, that is probably your best avenue.
                I can also read PMs on Codeforces but it's kinda scuffed there
                so I only do so every once in a while.
            </AboutWrapper>
        </Layout>
    )
}

export default AboutPage