export interface VerifyCodeResponse {
  data: {
    token_type: string,
    access_token: string,
  },
  message: string,
  status: string
}

export interface SendVerificationCodeResponse {
  data: {
    user_exist: false,
    validation_code_lifetime: number
  }
}
