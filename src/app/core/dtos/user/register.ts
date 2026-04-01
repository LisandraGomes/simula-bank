export class UserRegisterDto {
    name: string;
    midName: string;
    email: string;
    cpf: string;
    birthDate: string;
    password: string;
    confirmPassword: string;
    idTipoUsuario: number;
    userMaster: boolean;
    
    constructor(name: string, midName: string, email: string, cpf: string, birthDate: string, password: string, confirmPassword: string, idTipoUsuario: number, userMaster: boolean) {
        this.name = name;
        this.midName = midName;
        this.email = email;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.idTipoUsuario = idTipoUsuario;
        this.userMaster = userMaster;
    }
}