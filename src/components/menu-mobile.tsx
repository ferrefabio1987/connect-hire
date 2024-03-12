'use client'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars2Icon } from '@heroicons/react/20/solid'
import { Link } from '../types/link'
import LocalizedClientLink from './localized-client-link'

type Props = {
  links: Link[]
}

export default function MenuMobile({ links }: Props) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <Bars2Icon className="h-10 w-10" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-col gap-2 px-2 py-2">
              {links.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <LocalizedClientLink
                      href={item.href}
                      className={`w-full p-2 text-right ${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    >
                      {item.title}
                    </LocalizedClientLink>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
