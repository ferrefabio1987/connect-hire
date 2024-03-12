import { Link } from '../types/link'
import LocalizedClientLink from './localized-client-link'

type Props = {
  links: Link[]
}

export default function Footer({ links }: Props) {
  return (
    <footer id="footer" className="relative z-50 bg-black text-white">
      <div className="border-b border-t border-gray-200 px-6 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:flex">
            <div className="mb-16 flex w-full lg:mb-0 lg:w-1/2">
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-col gap-5">
                  {links.map((item, index) => (
                    <li key={index}>
                      <LocalizedClientLink href={item.href}>{item.title}</LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <LocalizedClientLink href="/">ARCHIMEDEX</LocalizedClientLink>
        <p className="mt-6 text-xs leading-none text-white lg:text-sm">
          2024 Archimedex. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
