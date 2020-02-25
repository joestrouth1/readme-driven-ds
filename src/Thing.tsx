import * as React from 'react'

export interface ThingProps {
  /**
   * The color to render
   */
  color?: 'blue' | 'red'
}
/**
 * Renders a thing very nicely
 */
export const Thing = (props: ThingProps) => {
  return <div>{props.color} the snozzberries taste like snozzberries</div>
}
