import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PlopExample } from '.'

export default {
  title: 'Components/PlopExample',
  component: PlopExample,
   parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof PlopExample>

const Template: ComponentStory<typeof PlopExample> = (args) => (
  <PlopExample {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'PlopExample'
}