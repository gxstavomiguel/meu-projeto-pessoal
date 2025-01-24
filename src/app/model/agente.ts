export class Agente {

    id! : number;
    nome! : string;
    skill! : string;
    tipo! : string;
    isEditing? : boolean;

    constructor(id: number, nome: string, skill: string, tipo: string){
        this.id = id;
        this.nome = nome;
        this.skill = skill;
        this.tipo = tipo;
    }

}
