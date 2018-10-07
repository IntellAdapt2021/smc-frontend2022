import axios from "axios";

export default class ProducerService {
    getProducers() {
        return axios.get("http://sdn.power2peer.com/transactionapi/api/registeredusers?size=1000");
        //return fetch("http://localhost:8080/api/registeredusers?size=1000").then(data => data.json());
        /*return axios({
            method: "GET",
            "url": "https://pokeapi.co/api/v2/pokemon/?limit=151"
        })*/
    }
}