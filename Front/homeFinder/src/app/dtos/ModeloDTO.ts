// {
//     "TipoVivienda": 50,
//     "CalleConectadaEnPies": 63,
//     "AreaLote": 9478,
//     "CalidadMateriales": 6,
//     "CondicionCasa": 5,
//     "AñoConstruccion": 1973,
//     "AñoRemodelado": 1994,
//     "AreaRevestimiento": 0,
//     "AreaSotano1": 383.5,
//     "AreaSotano2": 0,
//     "AreaSotanoSinTerminar": 477.5,
//     "AreaSotanoTotal": 991.5,
//     "AreaPrimerPiso": 1087,
//     "AreaSegundoPiso": 0,
//     "AreaTerminadaBajaCalidad": 0,
//     "AreaViviendaSobreSuelo": 1464,
//     "BañosCompletosSotano": 0,
//     "BañosMediosSotano": 0,
//     "BañosCompletosSobreSuelo": 2,
//     "BañosMediosSobreSuelo": 1
// }
export interface ModeloRequest{
    TipoVivienda: Number,
    CalleConectadaEnPies: Number,
    AreaLote: Number,
    CalidadMateriales: Number,
    CondicionCasa: Number,
    AñoConstruccion: Number,
    AñoRemodelado: Number,
    AreaRevestimiento: Number,
    AreaSotano1: Number,
    AreaSotano2: Number,
    AreaSotanoSinTerminar: Number,
    AreaSotanoTotal: Number,
    AreaPrimerPiso: Number,
    AreaSegundoPiso: Number,
    AreaTerminadaBajaCalidad: Number,
    AreaViviendaSobreSuelo: Number,
    BañosCompletosSotano: Number,
    BañosMediosSotano: Number,
    BañosCompletosSobreSuelo: Number,
    BañosMediosSobreSuelo: Number
}
export interface ModeloResponse{
    resultado:Number
}