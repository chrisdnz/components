import { addDecorator } from '@storybook/react'

import MainWrapper from '../src/Wrapper'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(story => <MainWrapper>{story()}</MainWrapper>)
