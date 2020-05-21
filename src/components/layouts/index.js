/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Header from "./Header"
import theme from "../../theme/theme"

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
)

const Layout = (props) => {
  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description

  // Load the Prismic edit button
  if (typeof window !== "undefined" && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        sx={{
          variant: "styles.main",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
