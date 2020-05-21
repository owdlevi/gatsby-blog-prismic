/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/layouts'

const AboutUs = () => {
  return (
    <Layout>
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
            to="/contact-us"
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
            Contact Us
          </Link>
        </Container>
      </section>
    </Layout>
  )
}

export default AboutUs
