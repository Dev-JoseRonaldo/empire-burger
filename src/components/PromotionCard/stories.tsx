import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PromotionCard } from '.'

export default {
  title: 'Components/PromotionCard',
  component: PromotionCard,
   parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof PromotionCard>

const Template: ComponentStory<typeof PromotionCard> = (args) => (
  <PromotionCard {...args} />
)

export const Default = Template.bind({})
Default.args = {}