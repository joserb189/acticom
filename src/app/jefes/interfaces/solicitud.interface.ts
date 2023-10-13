export interface SolicitudInterface{
   
    status: boolean,
    observacion:string,
    created_at:string,
    valor_numerico:number,
    periodo:number,
    jdepto:string,
    alumno:string,
    act_complementaria:number,
    id: string,
}

export class SolicitudClase {
    
    observacion!:string;
    created_at!: string;
    valor_numerico!: string;
    periodo!: string;
    jdepto!: string;
    alumno!: string;
    act_complementaria!: string;
   status!:boolean;
   id!:string;

}