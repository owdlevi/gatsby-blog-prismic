/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layouts'
import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    prismic {
      allBlog_homes(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            headline
            description
            image
          }
        }
      }
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            category {
              __typename
              ... on PRISMIC_Category {
                _meta {
                  id
                  uid
                  type
                }
                category_name
              }
            }
            date
            featured_image
            featured_imageSharp {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {
  return (
    <section
      sx={{
        px: [5, 6],
        backgroundColor: '#f8f9fa',
        minHeight: ['auto', '500px'],
        display: 'flex',
        alignItems: 'center'
      }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column',
          maxWidth: '540px'
        }}
        data-wio-id={home._meta.id}>
        <h1
          sx={{
            variant: 'styles.h1',
            mt: 0,
            fontSize: [4, 5, 6],
            textAlign: 'center'
          }}>
          {RichText.asText(home.headline)}
        </h1>
        <p sx={{ textAlign: 'center' }}>{RichText.asText(home.description)}</p>
        <div
          sx={{
            mt: 4
          }}>
          <Link
            to="/blog"
            sx={{
              variant: 'styles.ctabutton'
            }}>
            View Blog
          </Link>

          <Link
            to="/contact-us"
            sx={{
              variant: 'styles.ctabutton',
              ml: 3,
              backgroundColor: '#FFF',
              border: '1px solid #dadce0',
              color: '#202124',
              ':hover': {
                backgroundColor: '#f7f8ff',
                outline: 'none',
                textDecoration: 'none',
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
              }
            }}>
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  const doc = data.prismic.allBlog_homes.edges.slice(0, 1).pop()
  const posts = data.prismic.allPosts.edges

  if (!doc) return null

  return (
    <Layout>
      <BlogHomeHead home={doc.node} />
      <section>
        <Container
          sx={{
            textAlign: 'center'
          }}>
          <p
            sx={{
              textAlign: 'center',
              maxWidth: '100%',
              mx: 'auto',
              mt: 5,
              fontSize: 4
            }}>
            As the web advances, users' expectations grow. With web.dev's guidance, you can give your users the best experience, wherever
            they are.
          </p>
          <Link
            to="/about-us"
            sx={{
              variant: 'styles.ctabutton',
              color: 'accent',
              backgroundColor: 'transparent',
              mx: 'auto',
              ':hover': {
                backgroundColor: '#f7f8ff',
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
              }
            }}>
            About Us
          </Link>
        </Container>
      </section>
      <BlogPosts posts={posts} />
    </Layout>
  )
}
