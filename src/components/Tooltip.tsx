import type { TooltipProps } from '@radix-ui/themes'
import { IconButton, Tooltip as RadixTooltip } from '@radix-ui/themes'
import { Info } from 'lucide-react'

export default function Tooltip() {}

Tooltip.Root = (props: TooltipProps) => {
  const { children, ...restProps } = props
  return <RadixTooltip {...restProps}>{children}</RadixTooltip>
}

Tooltip.Info = (props: TooltipProps) => (
  <RadixTooltip {...props}>
    <IconButton asChild variant="ghost" color="gray" size="1" radius="full" style={{ opacity: 0.6 }} tabIndex={0}>
      <Info size={16} />
    </IconButton>
  </RadixTooltip>
)
