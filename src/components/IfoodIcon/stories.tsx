import { ComponentMeta, ComponentStory } from '@storybook/react'
import IfoodIcon from '.'

export default {
  title: 'Components/IfoodIcon',
  component: IfoodIcon,
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
} as ComponentMeta<typeof IfoodIcon>

const Template: ComponentStory<typeof IfoodIcon> = args => (
  <IfoodIcon {...args} />
)

export const primary = Template.bind({})
primary.args = {}

export const secondary = Template.bind({})
secondary.args = {
  iconColor: 'secondary'
}
