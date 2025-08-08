import type { SigninRequest, SigninResponse } from '@/types/auth'
import request from '@/utils/request'

export function signin(req: SigninRequest): Promise<SigninResponse> {
  return request.post('/auth/signin', req)
}
