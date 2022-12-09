import { useMemo } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import styled, { useTheme } from 'styled-components'
import DEFAULT_STYLE from '../Input/defaultInputStyle'

export const Mentions = ({
  mentionsList,
  onChange,
  suggestionPortalhost = document.getElementById('root'),
  trigger = '@',
  markup = '@[__display__](user:__id__)',
  value
}) => {
  const theme = useTheme()

  const defaultSuggestionsStyles = useMemo(
    () => ({
      suggestions: {
        list: {
          backgroundColor: 'white',
          border: `1px solid ${theme.colors.borderInput}`,
          fontSize: 14
        },
        item: {
          padding: '5px 15px',
          borderBottom: `1px solid ${theme.colors.borderInput}`,
          '&focused': {
            backgroundColor: theme.colors.secondary
          }
        }
      }
    }),
    [theme]
  )

  const handleOnChange = (_event, newValue, _newPlainTextValue, mentions) => {
    onChange(newValue, mentions)
  }

  const renderSuggestion = (entry, search, highlightedDisplay, index, focused) => (
    <div className={`user ${focused ? 'focused' : ''}`}>{highlightedDisplay}</div>
  )

  return (
    <CustomMentionsInput
      allowSpaceInQuery
      allowSuggestionsAboveCursor
      className='custom_mentions'
      onChange={handleOnChange}
      placeholder={`Mention people using ${trigger}`}
      style={defaultSuggestionsStyles}
      suggestionsPortalHost={suggestionPortalhost}
      value={value}>
      <Mention
        data={mentionsList}
        markup={markup}
        renderSuggestion={renderSuggestion}
        style={{ backgroundColor: theme.colors.secondary50 }}
        trigger={trigger}
      />
    </CustomMentionsInput>
  )
}

const CustomMentionsInput = styled(MentionsInput)`
  [class*='_control'] {
    ${DEFAULT_STYLE}
  }
  [class*='_input'] {
    ${DEFAULT_STYLE}
  }
`
