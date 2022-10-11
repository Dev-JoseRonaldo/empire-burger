import { ComponentMeta, ComponentStory } from '@storybook/react'

import { WhatsappButton } from '.'

import { socialMock } from './mock'

export default {
  title: 'Components/WhatsappButton',
  component: WhatsappButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'URL_FIGMA'
    }
  },
  args: {
    name: socialMock[0].name,
    urlIcon: socialMock[0].urlIcon,
    urlRedirect: socialMock[0].urlRedirect,
    alt: socialMock[0].alt
  }
} as ComponentMeta<typeof WhatsappButton>

const Template: ComponentStory<typeof WhatsappButton> = args => (
  <WhatsappButton {...args} />
)

export const Default = Template.bind({})
Default.args = {}