import axios from "axios"
import { IPlayer } from "../interfaces/player";
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