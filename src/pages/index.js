import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"


export default ({ data }) => {
	return(
		<Layout>
	    <p className="summary">
        Founder and designer of <a href="https://diagram.news/">Diagram News</a>, a blog covering artificial intelligence. Previously a senior product designer at The Washington Post.
      </p>
      <div className="section-label">
        <h5 className="label">Work</h5>
      </div>
	    <div className="work-table">
	    	{data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="work-figure">
          	<Link to={node.fields.slug}>
          		<div className="figure-text">
          			<h3 className="project-title">
		              {node.frontmatter.title}
		            </h3>
		            <p>{node.frontmatter.blurb} {node.frontmatter.time}.</p>
                <h5 className="label">Made with</h5>
		            <p>{node.frontmatter.tech}</p>
          		</div>
	            <Img  className="figure-image" fluid={node.frontmatter.image.childImageSharp.fluid} />
            </Link>
          </div>
        ))}
	    </div>
	  </Layout>
	)
}
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" }}}
      sort: { fields: [frontmatter___order], order: [DESC] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            blurb
            tech
            time
            order
            type
            image {
		          childImageSharp {
		            fluid {
		              ...GatsbyImageSharpFluid
		            }
		          }
		        }
          }
          excerpt
          fields {
          	slug
          }
        }
      }
    }
  }
`
