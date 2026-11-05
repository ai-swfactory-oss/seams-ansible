export interface AnsibleSeamInfo {
  readonly name: string
}

export interface AnsibleSeam {
  readonly info: () => AnsibleSeamInfo
}

export const createAnsibleSeam = (): AnsibleSeam => ({
  info: () => ({ name: 'ansible' }),
})
