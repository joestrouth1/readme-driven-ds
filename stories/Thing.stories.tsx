import React from 'react'
import { Thing } from '@/src/Thing'
import { Example } from '@/src/Example'

/**
 * This file uses Component-Story Format or CSF
 */

export default {
  title: 'Thing',
  parameters: {
    componentSubtitle: 'Handy thing',
    subcomponents: { Example },
  },
  component: Thing,
}

export const thing = () => <Thing />
export const blue = () => <Thing color="blue" />
