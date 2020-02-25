import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { configure } from '@storybook/react'

addDecorator(withA11y)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    extractComponentDescription(component, storyParameters) {
      console.log({ component, storyParameters })
      if (
        component.__docgenInfo?.description &&
        typeof component.__docgenInfo.description === 'string'
      ) {
        return component.__docgenInfo.description
      }
      return null
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'White', value: '#ffffff', default: true },
    { name: 'SRC Green', value: '#00502f' },
    { name: 'SRC Lime', value: '#7ac143' },
    { name: 'SRC Red', value: '#ee3124' },
  ],
})

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module)
