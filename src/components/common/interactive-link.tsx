import LocalizedClientLink from '../localized-client-link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({ href, children, onClick, ...props }: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="group flex items-center gap-x-1"
      href={href}
      onClick={onClick}
      {...props}
    >
      <p className="text-ui-fg-interactive">{children}</p>
      <ArrowRightIcon
        className="duration-150 ease-in-out group-hover:rotate-45"
        color="var(--fg-interactive)"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
