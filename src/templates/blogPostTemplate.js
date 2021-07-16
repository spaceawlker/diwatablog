import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import MDXStyles from '../components/MDXStyling';
import typography from '../utils/typography';
import React from 'react';

import { Layout } from '../components/Layout';
import PreviousNextNav from '../components/PreviousNextNav';
import PostPreview from '../components/PostPreview';
import TableOfContents from '../components/TableOfContents';
import Dump from '../components/Dump';

const Article = styled.article`
    padding: ${typography.rhythm(1)} 5% ${typography.rhythm(1)};
    background-color: white;
`;

const NarrowTableOfContents = styled(TableOfContents)`
`;

// Contains both the ToC and the Article
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 6fr 1fr;
`;

const BlogPostTemplate = ({ data, pageContext }) => {
    const { frontmatter, body, tableOfContents } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <ContentContainer>
                <NarrowTableOfContents items={tableOfContents.items} />
                <Article>
                    <PostPreview frontmatter={frontmatter}/>
                    <MDXProvider components={MDXStyles}>
                        <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider>
                    <PreviousNextNav 
                        previous={previous}
                        next={next} />
                </Article>
            </ContentContainer>
        </Layout>
    );
};


export const query = graphql`
    query PostFromSlug($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            body
            frontmatter {
                title
                preview
                date(formatString: "YYYY MMMM Do")
            }
            tableOfContents
        }
    }
`;

export default BlogPostTemplate;