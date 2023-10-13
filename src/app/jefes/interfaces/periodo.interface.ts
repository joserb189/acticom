export interface PeriodoInterface{
    id: string,
    mes_ini: string,
    mes_fin: string,
    anio: string,
    status: number,
}

export class PeriodoClase {

    periodo!:string;
    mes_ini!: string;
    mes_fin!: string;
    anio!: string;
    id!: string;
   status!:boolean;
}