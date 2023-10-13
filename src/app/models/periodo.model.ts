export class PeriodoModel{
    constructor(
        public status: boolean,
        public anio: string,
        public mes_fin: string,
        public mes_ini: string,
        public periodo: string,
        public id?: string,
    ){}
}