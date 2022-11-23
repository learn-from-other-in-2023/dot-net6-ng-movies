export interface IUserCredentials {
    email: string;

    password: string;
}

export interface IAuthenticationResponse {
    token: string;

    expiration: Date;
}

export interface IUserDTO {
    id: string;

    email: string;
}