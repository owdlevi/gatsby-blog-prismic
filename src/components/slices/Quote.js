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
        color: '#868686',
        ':before': {
          content: '"« "'
        },
        ':after': {
          content: '" »"'
        }
      }}>
      {RichText.asText(slice.primary.quote)}
    </blockquote>
  </div>
)
