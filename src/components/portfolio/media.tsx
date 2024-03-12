import Image from 'next/image'
import useSize from './hooks/useSize'

type Props = {
  index: number
  title?: string
  active?: boolean
  image: string
  x: number
  y: number
}

export const Media = ({ index, image, title, x, y, active = false }: Props) => {
  const { ref, dimensions } = useSize()

  return (
    <div
      ref={ref}
      className={`absolute z-0 h-[24vw] w-[35vw] ease-in ${active ? 'opacity-1' : 'opacity-0'}`}
      style={{
        transform: `translate(${x + dimensions.width / 3}px, ${y - (dimensions.height + index * 160)}px)`
      }}
    >
      <Image
        alt={title ?? 'Image'}
        src={image}
        priority
        fill
        sizes="(max-width: 991px) 81vw, (max-width: 1439px) 34vw, 31vw"
        className="object-contain"
      />
    </div>
  )
}
