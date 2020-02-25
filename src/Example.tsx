import * as React from 'react'
import { Thing } from '@/src/Thing'

export interface ExampleProps {
  /**
   * Banana
   */
  banana: boolean
  square?: string
}

export const Example = ({ banana }: ExampleProps) => {
  return (
    <span>
      {banana.toString()}
      <Thing />
    </span>
  )
}
