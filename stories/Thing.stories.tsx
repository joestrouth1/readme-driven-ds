import React from 'react'
import { Thing } from '@/src/Thing'

export default {
  title: 'Thing',
  component: Thing,
}

export const toStorybook = () => <Thing />
export const blue = () => <Thing color="blue" />
