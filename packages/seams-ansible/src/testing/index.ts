import type { AnsibleSeam, AnsibleSeamInfo } from '../index'

export const createFakeAnsibleSeam = (info: AnsibleSeamInfo = { name: 'ansible' }): AnsibleSeam => ({
  info: () => info,
})
