export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    get data(){
        return this._data;
    }
    
    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }
}