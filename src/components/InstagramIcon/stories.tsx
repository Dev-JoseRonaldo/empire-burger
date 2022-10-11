import { ComponentMeta, ComponentStory } from '@storybook/react'
import Instagram from '.'

export default {
  title: 'Components/Instagram',
  component: Instagram,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    design: {
      type: 'figma',
      url: 'URL_FIGMA'
    }
  },
  args: {
    iconColor: 'primary'
  }
} as ComponentMeta<typeof Instagram>

const Template: ComponentStory<typeof Instagram> = args => (
  <Instagram {...args} />
)

export const primary = Template.bind({})
primary.args = {}

export const secondary = Template.bind({})
secondary.args = {
  iconColor: 'secondary'
}
