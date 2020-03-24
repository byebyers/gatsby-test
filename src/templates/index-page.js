import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
}) => (
  <div
    className="big-banner display-banner"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/db4y7ocbu/image/upload/v1528328041/sample.jpg')`,
    }}
  >
    <section className="cover-background">
      <div className="title-wrap">
        <h1>My Super Sweet Title</h1>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
      }
    }
  }
`
