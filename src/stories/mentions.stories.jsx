import { useState } from 'react'
import { Mentions } from '../components/Mentions'

const Story = {
  title: 'Design System/Components/Mentions',
  component: Mentions,
  argTypes: {
    suggestionPortalhost: {
      control: { type: 'string' }
    },
    trigger: {
      control: { type: 'string' }
    },
    markup: {
      control: { type: 'string' }
    }
  }
}

const Template = args => {
  const [value, setValue] = useState('')

  const handleOnChange = newValue => setValue(newValue)

  return (
    <div style={{ width: 320 }}>
      <Mentions value={value} onChange={handleOnChange} {...args} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  mentionsList: [
    { id: '1', display: 'John doe' },
    { id: '2', display: 'Hazzel Nut' }
  ]
}

export default Story
