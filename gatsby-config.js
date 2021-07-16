const siteMetadata = {
    title: `DIWATA`,
    description: `Magic in algorithms`,
};

module.exports = {
    siteMetadata,
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                remarkPlugins: [ 
                    require('remark-math'), 
                    require('remark-slug')
                ],
                rehypePlugins: [ 
                    [
                        require('rehype-katex'),
                        {
                            macros: {
                                "\\lcm" : "\\mathrm{lcm}"
                            }
                        }
                    ]
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `${__dirname}/posts`, name: `posts` },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography`,
                omitGoogleFont: false
            }
        }
    ],
};