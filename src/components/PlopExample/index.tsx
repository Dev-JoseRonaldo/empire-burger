export interface PlopExampleProps {
  title: string
}

export const PlopExample = ({ title }: PlopExampleProps) => {
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-lg">{title}</h1>
    </div>
  )
}