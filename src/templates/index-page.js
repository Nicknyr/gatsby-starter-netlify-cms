import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import styled from "styled-components"


const Container = styled.main`
  display: flex;
  flex-direction: column;
  background: #181818;
  margin-bottom: 10rem;
  padding: 1rem;
`

const Intro = styled.section`
  height: auto;
  width: 100%;
  color: #FFF;
  text-shadow: 1px 1px 1px #CCCCCC;
  {/*line-height: 4rem;*/}

  @media(min-width: 992px) {
    padding: 3rem 8rem;
  }
`

const ImageContainer = styled.aside`
  height: auto;
  width: 50%;
`

const H1 = styled.h1`
  font-family: 'IBM Plex Serif';
  font-weight: 800;
  font-size: 3rem !important;
`

const H3 = styled.h3`
  font-family: 'IBM Plex Mono';
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Container>
    <Intro>
      <H1>{mainpitch.title}</H1>
      <H3>{mainpitch.description}</H3>
      <p>{description}</p>
      {/*<Features gridItems={intro.blurbs} />*/}
    </Intro>
    <ImageContainer></ImageContainer>
  </Container>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
