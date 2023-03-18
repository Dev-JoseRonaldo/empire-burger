/* eslint-disable @next/next/no-img-element */

import { PromotionCard } from '../PromotionCard'

export const Promotion = () => {
  return (
    <section className="flex flex-col justify-center items-start max-w-[1200px] mx-auto px-4 pt-[131px]">
      <div>
        <h1 className="font-lilita text-4xl uppercase text-gray-900/[0.9]">
          Ofertas Especiais
        </h1>
        <p className="text-base text-gray-900/[0.69] mb-4">
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:grid-rows-2 sm:gap-4 lg:gap-[30px]">
        <PromotionCard
          image="https://res.cloudinary.com/devjoseronaldo/image/upload/v1665418038/empireburguer/oferta-1_z2zzzs.png"
          alt="Promoção 1"
          itemTitle="BURGUER IMPERIAL+BATATA"
          itemSubtitle="250kg"
          type="todayOffer"
        />

        <PromotionCard
          image="https://res.cloudinary.com/devjoseronaldo/image/upload/v1665418037/empireburguer/oferta-2_lyil4c.png"
          alt="Promoção 2"
          itemTitle="BATATA"
          itemSubtitle="150kg"
        />

        <PromotionCard
          image="https://res.cloudinary.com/devjoseronaldo/image/upload/v1665418038/empireburguer/oferta-3_medudo.png"
          alt="Promoção 3"
          itemTitle="SORVETE"
          itemSubtitle="50kg"
        />
      </div>
    </section>
  )
}
