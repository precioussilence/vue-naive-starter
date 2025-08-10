export interface User {
  id: number
  username: string
  nickname: string
  email: string
  phone: string
  gender: string
  avatar: string
  status: string
  createdTime: string
  updatedTime: string
}

export interface Role {
  id: number
  roleName: string
  roleCode: string
  description: string
  status: string
  createdTime: string
  updatedTime: string
  owned: boolean
}

export interface Menu {
  id: number
  resourceName: string
  resourceCode: string
  resourceType: string
  parentId: number
  path: string
  icon: string
  sort: string
  visible: string
  status: string
  createdTime: string
  updatedTime: string
  owned: boolean
}
