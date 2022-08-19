import React,{}from 'react'
import axios,{AxiosResponse} from 'axios'
import  Data from '../App'
export const UseFetch =async (url:string) : Promise<any> =>{
     const {data} :AxiosResponse<any> = await axios.get(url) 
    return data 
}