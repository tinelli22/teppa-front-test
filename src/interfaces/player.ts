export interface IPlayer {
    id?: string;
    name: string;
    age: number;
    image: string;
    isInjured: boolean
}

export interface IFormPlayer extends Omit<IPlayer, "id" | 'image'>{
    image: Blob | null
}