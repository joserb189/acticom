export class ActividadescomplementariasModel{
    constructor(
        public act_gnral: string,
        public act_especifica: string,
        public credito: number,
        public lugar: string,
        public num_participantes: number,
        public tiempo: string,
        public descripcion: string,
        public tipo: string,
        public id?: number,

    ){}
}