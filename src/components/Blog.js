import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useGetArticle from '../hooks/useGetArticle';

const Blog = () => {
    const [article, loading] = useGetArticle();

    return (
        <DivCool>
            <Title>Blog</Title>
            {loading === true ? <p>Cargando....</p>
                : <div>
                    {article.map((article) => {
                        return <Article key={article.id}>{article.title}</Article>
                    })}
                </div>
            }
        </DivCool>
    );
}

const DivCool = styled.div`
    margin: 40px 0 20px 0;
`;

const Title = styled.h2`
    margin-bottom: 10px;
`;

const Article = styled.p`
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;

export default Blog;