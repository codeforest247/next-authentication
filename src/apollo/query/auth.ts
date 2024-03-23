import { gql } from "@apollo/client";

export const REGISTRATION = gql`
    mutation Signup($signupInput: SignupInput!) {
        signup(signupInput: $signupInput) {
            message
            success
        }
    }
`