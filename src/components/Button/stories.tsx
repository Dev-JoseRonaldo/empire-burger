import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'URL_FIGMA'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  children: 'Button',
  className: 'uppercase'
}
