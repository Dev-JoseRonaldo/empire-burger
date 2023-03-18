import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Promotion } from '.'

export default {
  title: 'Components/Promotion',
  component: Promotion,
   parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Promotion>

const Template: ComponentStory<typeof Promotion> = (args) => (
  <Promotion {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Promotion'
}