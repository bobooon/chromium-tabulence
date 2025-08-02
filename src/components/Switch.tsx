import type { SwitchProps as RadixSwitchProps } from '@radix-ui/themes'
import { Flex, Switch as RadixSwitch, Text } from '@radix-ui/themes'
import Tooltip from './tooltip.tsx'

interface SwitchProps extends RadixSwitchProps { label: string, tooltip?: string }

export default function Switch(props: SwitchProps) {
  const { label, tooltip, ...restProps } = props

  return (
    <Flex asChild align="center" gap="2" width="100%">
      <Text as="label" size="2">
        {tooltip && <Tooltip.Info content={tooltip} />}
        <Text weight="medium" style={{ flexGrow: 1 }}>
          {label}
        </Text>
        <RadixSwitch size="2" {...restProps} />
      </Text>
    </Flex>
  )
}
