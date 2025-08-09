export interface SigninRequest {
  username: string
  password: string
  captcha: string
}

export interface SigninResponse {
  token: string
  authorities: string[]
}

export interface SignupRequest {
  username: string
  password: string
  confirmPassword?: string
  email?: string
  phone?: string
}
