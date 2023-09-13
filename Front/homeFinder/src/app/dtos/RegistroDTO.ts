export interface RegistroRequest{
    Usuario:string,
    Contrasena:string,
    Nombres:string,
    Apellidos:string
    CorreoElectronico:string,
    Telefono:string,
    Tipo:string
}
export interface RegistroResponse{
    message:string
}