/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) => (
  <div className="post-quote container">
    <blockquote
      sx={{
        mb: [3, 4],
        display: 'inline-block',
        fontStyle: 'italic',
        fontSize: '24px',
        color: 'text',
        borderLeft: '5px solid',
        borderColor: 'text',
        mx: [3, 5, 6],
        px: [3, 4]
      }}>
      {RichText.asText(slice.primary.quote)}
    </blockquote>
  </div>
)
