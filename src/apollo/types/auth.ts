interface SuccessInfo {
    success: boolean;
    message: string;
  }
  

export interface Signup {
    signup: SuccessInfo
}

export interface VerifyPhone {
  verifyPhone: SuccessInfo
}

export interface Login {
  login: SuccessInfo
}