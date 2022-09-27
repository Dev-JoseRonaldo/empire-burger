import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME'
    }
  },
  args: {
    color: 'dark'
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const DarkColor = Template.bind({})

export const LightColor = Template.bind({})
LightColor.args = {
  color: 'light'
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  width: 400
}
