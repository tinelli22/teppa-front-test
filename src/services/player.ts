import axios from "axios"
import { IFormPlayer, IPlayer } from "../interfaces/player";
import backApi from "./config"

export const getAllService = async (): Promise<IPlayer[] | null> => {
    try {
        const resp = await axios.get(`${backApi.baseUrl}/players`)
        if(!resp.data) throw new Error("Erro no servidor");
        return resp.data as IPlayer[]
    } catch (err) {
        console.error(err);
        return null
    }
}

export const saveService = async (data: IPlayer) => {
    try {
        
        
        const method = !data.id ? "post" : "put"
        const url = !data.id ? `players/new` : 'players';
        const resp = await axios[method](`${backApi.baseUrl}/${url}`, data)
        if(!resp.data) throw new Error("Erro ao cadastrar");
        return resp.data
    } catch (err) {
        console.error(err);
        return null
    }
}