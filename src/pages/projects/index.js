import React from "react"
import { Link } from 'gatsby'
import { Icon } from 'react-fa'
import { graphql } from "gatsby"
import Layout from '../../components/layout'

const IndexPage = ({
  data
}) => {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
      <Layout>
      <Link to={'/'}>
        <Icon 
          style={{color: 'steelblue'}}
          size="2x"
          name={"home"} />
      </Link>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`