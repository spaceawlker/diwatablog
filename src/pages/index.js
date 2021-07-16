import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Layout }  from '../components/Layout';

import PostPreview from '../components/PostPreview';
import typography from '../utils/typography';

const IndexWrapper = styled.main`
    width: 60%;
    margin: auto;
    background-color: white;
    padding-left: 5%;
    padding-right: 5%;
`;

const PostWrapper = styled.div`
    padding: ${typography.rhythm(1.5)} 0;
    border-bottom: 2px solid grey;
`;

const ReadMoreLink = styled(Link)`
    text-decoration: underline;
    color: black;
`;

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <IndexWrapper>
            {
                data.allMdx.nodes.map(
                    ({ id, excerpt, frontmatter, fields }) => (
                    <PostWrapper key={id}>
                        <PostPreview frontmatter={frontmatter} />
                        <ReadMoreLink to={fields.slug}>
                            Read more &gt;
                        </ReadMoreLink>
                    </PostWrapper>
                ))
            }
            </IndexWrapper>
        </Layout>
    )
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {published: {eq: true}}}
        ){
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "YYYY MMMM Do")
                    preview
                }
                fields {
                    slug
                }
            }
       }
    }
`;

export default IndexPage