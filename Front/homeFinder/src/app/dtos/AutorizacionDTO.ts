export interface AutorizacionRequest{
    Usuario:string,
    Contrasena:string
}
export interface AutorizacionResponse{
    usuario:string,
    error:string
}