import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"


export default ({ data }) => {
	return(
		<Layout>
	    <h4>
	      Founder and writer of Diagram News, a blog covering artificial intelligence. Previously a senior product designer at The Washington Post.
	    </h4>
	    <div className="work-table">
	    	{data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="work-figure">
          	<Link to={node.fields.slug}>
          		<div className="figure-text">
          			<h3 className="project-title">
		              {node.frontmatter.title}
		            </h3>
                <h5 className="time">{node.frontmatter.time}</h5>
		            <p>{node.frontmatter.blurb}</p>
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
