import axios, { AxiosInstance } from 'axios';
import { DataApiResponse } from '../interfaces/interfaces';


export class APIData {

    public static api: AxiosInstance = axios.create({
        baseURL:"https://reqres.in/api"
    });

    public static fetchUserData = async (): Promise<DataApiResponse | undefined>  => {
        try{
            const response = await APIData.api.get("/users?per_page=12");
            // console.log(response.data)
            return {
                page: response.data.page,
                per_page: response.data.per_page,
                total: response.data.total,
                total_pages: response.data.total_pages,
                data: response.data.data
            }
        }catch(err) {
            console.log(err);
        }       
    }

}