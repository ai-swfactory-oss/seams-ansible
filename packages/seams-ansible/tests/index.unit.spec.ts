import { describe, expect, it } from 'vitest'

import { createAnsibleSeam } from '../src/index'
import { createFakeAnsibleSeam } from '../src/testing/index'

describe('createAnsibleSeam', () => {
  it('names itself ansible while the seam is a skeleton', () => {
    expect(createAnsibleSeam().info()).toEqual({ name: 'ansible' })
  })
})

describe('createFakeAnsibleSeam', () => {
  it('names itself ansible by default', () => {
    expect(createFakeAnsibleSeam().info()).toEqual({ name: 'ansible' })
  })

  it('returns the info it was given', () => {
    const info = { name: 'other' }
    expect(createFakeAnsibleSeam(info).info()).toBe(info)
  })
})
