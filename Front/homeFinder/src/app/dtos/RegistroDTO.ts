export interface RegistroRequest{
    Usuario:string,
    Contrasena:string,
    Nombre:string,
    CorreoElectronico:string,
    Telefono:string,
    RazonSocial:string,
    Cargo:string
}
export interface RegistroResponse{
    message:string,
}