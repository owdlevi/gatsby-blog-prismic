/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // Find the first text slice of post's body
  let firstTextSlice = post.body.find((slice) => slice.type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 80
    let text = RichText.asText(firstTextSlice.primary.text)
    let limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return <p sx={{ fontSize: '14px' }}>{limitedText.substring(0, limitedText.lastIndexOf(' ')) + '...'}</p>
    } else {
      // If it's shorter than the limit, just show it normally
      return <p sx={{ fontSize: '14px' }}>{text}</p>
    }
  } else {
    // If there are no slices of type 'text', return nothing
    return null
  }
}

// A summary of the Blog Post
const PostSummary = ({ post }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).format(postDate)
    : ''

  // Default title when post has no title set
  const defaultTitle = 'Untitled'

  const sharpImage = get(post, 'featured_imageSharp.childImageSharp.fluid')
  const blogImage = sharpImage ? <Img fluid={sharpImage} /> : <img src={post.featured_image.url} alt="" />

  return (
    <Link
      to={linkResolver(post._meta)}
      sx={{
        width: ['100%', 'calc(50% - 30px)', 'calc(100%/3 - 30px)'],
        backgroundColor: 'cardBG',
        overflow: 'hidden',
        borderRadius: '5px',
        mx: '15px',
        mb: '20px',
        textDecoration: 'none',
        display: 'inline-block',
        color: 'text'
      }}>
      <div
        sx={{
          width: '100%',
          height: '250px',
          overflow: 'hidden'
        }}>
        {blogImage}
      </div>
      <div
        sx={{
          p: [3, 4]
        }}>
        <h3
          sx={{
            color: 'text',
            fontSize: [2, 3],
            fontWeight: '500',
            mt: 0,
            mb: [2, 3]
          }}>
          {/* We render a link to a particular post using the linkResolver for the url and its title */}
          {RichText.asText(post.title).length !== 0 ? RichText.asText(post.title) : defaultTitle}
        </h3>{' '}
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <time sx={{ fontSize: '12px' }}>{postDate}</time>
        </div>
        {/* Renders a small preview of the post's text */}
        {firstParagraph(post)}
      </div>
    </Link>
  )
}

export default ({ posts }) => {
  if (!posts) return null

  return (
    <section
      sx={{
        backgroundColor: 'lightBG'
      }}>
      <Container>
        <h2>Our Latest Posts</h2>
        <div
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'start',
            mx: '-15px'
          }}>
          {posts.map((post) => {
            return <PostSummary post={post.node} key={post.node._meta.id} />
          })}
        </div>
      </Container>
    </section>
  )
}
