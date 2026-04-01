export interface UserToken {
    user: UserInformationToken;
    roleJson : RoleJson;
}
export interface UserInformationToken {
    id: string;
    authorized: boolean;
    cpf: string;
    email: string;
}
export interface RoleJson {
    id : number;
    description: string;
}