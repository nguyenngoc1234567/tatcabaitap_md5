import axios from "axios";

class ArticleModel {
    constructor(){
        this.api_url = 'https://642f6f04b289b1dec4b2df0f.mockapi.io/api/users';
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    find(id){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url+'/'+id)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
}
export default new ArticleModel();