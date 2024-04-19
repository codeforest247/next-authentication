import { gql } from "@apollo/client";

export const REGISTRATION = gql`
    mutation Signup($signupInput: SignupInput!) {
        signup(signupInput: $signupInput) {
            message
            success
        }
    }
`

export const VERIFICATION = gql`
    mutation VerifyPhone($verifyPhoneInput: VerifyPhoneInput!) {
        verifyPhone(verifyPhoneInput: $verifyPhoneInput) {
            message
            success
        }
    }
`
export const LOGIN = gql`
    mutation Login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
        message
        success
        }
    }
`

