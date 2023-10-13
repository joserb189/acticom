export interface JefedepartamentoInterface{
    nombre: string;
    apellidos: string;
    clave: number;
    fecha_ingreso: number;
    fecha_termina: number;
    status: boolean;
    departamento: string;
    rfc: string;
}
export class JefedepartamentoClase {
    nombre!: string;
    apellidos!: string;
    clave!: number;
    fecha_ingreso!: number;
    fecha_termina!: number;
    status!: boolean;
    departamento!:string;
    rfc!: string;
}