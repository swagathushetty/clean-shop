import { randomUUID } from 'crypto'
export class UniqueId {
    private readonly value: string;

    constructor(id:string){
        this.value = id ?? randomUUID()
    }

    getValue(): string {
        return this.value
    }

    equals(other:UniqueId): boolean {
        return this.value === other.value
    }

    toString(){
        return this.value
    }
}