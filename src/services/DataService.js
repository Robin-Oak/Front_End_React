import axios from 'axios';

const DATA_API_BASE_URL = "http://localhost:8080/api/v1/first";

class DataService{
    getData(){
        return axios.get(DATA_API_BASE_URL);
    }
}

export default new DataService();