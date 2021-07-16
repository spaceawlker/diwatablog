import React from 'react';
import styled from 'styled-components';

const PreviewPar = styled.p`
    color: grey;
    font-style: italic;
`;

export const PostTitle = styled.h1`
    color: rgb(12, 69, 48);
`;

const PostPreview = ({ frontmatter }) => {
    return (
        <>
            <PostTitle> {frontmatter.title} </PostTitle>
            <p> {frontmatter.date} </p>
            <PreviewPar> {frontmatter.preview} </PreviewPar>
        </>
    )
};

export default PostPreview