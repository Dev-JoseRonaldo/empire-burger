import { Button } from '../Button'

export const Home = () => {
  return (
    <div className="bg-homeMobile sm:bg-home w-full pt-24 pb-[710px] sm:pt-48 sm:pb-52 bg-right xs:bg-center lg:bg-center bg-no-repeat bg-cover">
      <div className="max-w-[1200px] mx-auto px-4">
        <span className="font-bold text-lg sm:text-xxl text-gray-900/[0.9]">
          Uma nova experiência!
        </span>
        <h2 className="font-lilita leading-10 text-[2.9rem] xs:text-7xl sm:text-8xl text-gray-800 mb-2 sm:mb-4 mt-0.5">
          KING <span className="text-secondary">BURGER</span>
        </h2>
        <p className="text-gray-900/[0.69] text-base sm:text-xxl mb-4">
          Para quem tem um{' '}
          <span className="bg-secondary font-black rounded p-[3px]">
            Apetite de um REI!
          </span>
        </p>
        <Button>Comprar Agora</Button>
      </div>
    </div>
  )
}
