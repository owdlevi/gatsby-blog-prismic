/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'

const Footer = (props) => {
  return (
    <footer
      sx={{
        variant: 'styles.footer'
      }}>
      <Container>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          Home
        </Link>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          Blog
        </Link>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          About
        </Link>

        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>© 2020 CrazyCode</div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
