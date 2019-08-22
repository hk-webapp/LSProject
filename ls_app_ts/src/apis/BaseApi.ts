import axios from 'axios'
import { resolve } from 'path';
import { reject } from 'q';

export default class BaseApi {

    private axiosObj = axios.create({
        baseURL: ""
    });

    public get(url: string, data: any = {}) {
        return this.axiosObj.get(url)
            .then((response: any) => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    public post(url: string, config: any) {

        this.axiosObj.post(url, config)
            .then((response: any) => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    }
}