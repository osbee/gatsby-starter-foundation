/** @jsxImportSource theme-ui */
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PostCard = ({ data }) => {
  const featured = data.frontmatter.featuredImage
  const image = getImage(featured?.childImageSharp?.gatsbyImageData)
  return (
  <article 
    className="post-card"
    sx={{
      bg: 'cardBg'
    }}
  >
    {featured ? 
      (
        <Link to={data.frontmatter.slug}>
          <GatsbyImage 
            image={image} 
            imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />
        </Link>
      ) : ""
    }
    <div class="post-content">
      <h2 className="title">
        <Link 
          to={data.frontmatter.slug}
          sx={{
            variant: 'links.postLink'
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      <p 
        className="meta"
        sx={{
          color: 'muted',
        }}
      >
        <time>{data.frontmatter.date}</time>
      </p>
    </div>
  </article>
  )
}

export default PostCard