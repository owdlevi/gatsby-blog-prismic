/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/layouts'

const ContactUs = () => {
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
        </Container>
      </section>
    </Layout>
  )
}

export default ContactUs
