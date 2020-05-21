/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) => (
  <div className="post-text container">
    <div
      sx={{
        fontSize: [2, 2],
        a: {
          color: 'accent',
          textDecoration: 'none'
        },
        h2: {
          variant: 'styles.h2'
        },
        h3: {
          variant: 'styles.h3'
        },
        p: {
          variant: 'styles.p'
        }
      }}>
      {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
    </div>
  </div>
)
