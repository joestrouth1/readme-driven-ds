import * as React from 'react'
import { Thing } from '@/src/Thing'

interface ExampleProps {
  /**
   * Bnana
   */
  banana: boolean
}

export const Example = ({ banana }: ExampleProps) => {
  return (
    <span>
      {banana.toString()}
      <Thing />
    </span>
  )
}
