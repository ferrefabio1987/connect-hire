import MenuMobile from './menu-mobile'
import LocalizedClientLink from './localized-client-link'
import { Link } from '../types/link'

type Props = {
  links: Link[]
}

export default function Header({ links }: Props) {
  return (
    <div className="fixed z-50 flex h-20 w-full items-center justify-between bg-white px-[5%]">
      <LocalizedClientLink href={'/'}>
        <div className="text-2xl font-bold uppercase">ConnectHire</div>
      </LocalizedClientLink>
      <ul className="hidden gap-x-10 lg:flex">
        {links.map((item, index) => (
          <li key={index} className="font-bold uppercase">
            <LocalizedClientLink href={item.href}>{item.title}</LocalizedClientLink>
          </li>
        ))}
      </ul>
      <div className="block lg:hidden">
        <MenuMobile links={links} />
      </div>
    </div>
  )
}
