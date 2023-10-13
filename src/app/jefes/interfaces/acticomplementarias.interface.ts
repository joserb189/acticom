export interface ActicomplementariaInterface{
    act_gnral: string;
    act_especifica: string;
    credito: boolean;
    lugar: string;
    num_participantes:string;
    tiempo:number;
    descripcion:string;
    tipo:string;
    id: number;
}

export class ActicomplementariaClase {
    
    act_gnral!: string;
    act_especifica!: string;
    credito!: boolean;
    lugar!: string;
    num_participantes!:string;
    tiempo!:number;
    descripcion!:string;
    tipo!:string;
    id!: number;
}