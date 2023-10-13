export class SolicitudModel{
    constructor(
        public status: boolean,
        public observacion: string,
        public created_at: string,
        public valor_numerico: string,
        public periodo: string,
        public jdepto: string,
        public alumno: string,
        public act_complementaria: string,
        public id?: string,
    ){}
}