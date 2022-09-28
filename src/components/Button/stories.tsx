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

export const primary = Template.bind({})
primary.args = {
  variant: 'primary',
  children: 'Comprar Agora'
}

export const secondary = Template.bind({})
secondary.args = {
  variant: 'secondary',
  children: 'Solicitar Pedido',
  className: 'uppercase'
}
