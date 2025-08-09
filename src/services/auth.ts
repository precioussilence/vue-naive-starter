import type { SigninRequest, SigninResponse, SignupRequest } from '@/types/auth'
import request from '@/utils/request'

export function signin(req: SigninRequest): Promise<SigninResponse> {
  return request.post('/auth/signin', req)
}

export function signup(req: SignupRequest): Promise<string> {
  return request.post('/auth/signup', req)
}
