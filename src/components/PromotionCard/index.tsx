/* eslint-disable @next/next/no-img-element */

import {
  containerStyle,
  containerStyleType,
  itemSubtitleStyleType,
  itemTitleStyle,
  itemTitleStyleType
} from './styles'

interface PromotionCardProps {
  image: string
  alt: string
  itemTitle: string
  itemSubtitle: string
  size?: 'medium' | 'larger'
  type?: 'offer' | 'todayOffer'
}

export const PromotionCard = ({
  image,
  alt,
  itemSubtitle,
  itemTitle,
  size = 'medium',
  type = 'offer'
}: PromotionCardProps) => {
  return (
    <div className={`${containerStyle} ${containerStyleType[type]}`}>
      <h3 className={`${itemTitleStyle} ${itemTitleStyleType[type]}`}>
        {itemTitle}{' '}
        <span className={itemSubtitleStyleType[type]}>{itemSubtitle}</span>
      </h3>

      {type === 'todayOffer' && (
        <h3 className="absolute bottom-14 right-10 text-2xl text-white-900/[0.69]">
          Apenas{' '}
          <span className="absolute top-6 left-0 text-6xl font-lilita text-white-900 uppercase">
            Hoje
          </span>
        </h3>
      )}

      <img className="w-full h-full" src={image} alt={alt} />
    </div>
  )
}
