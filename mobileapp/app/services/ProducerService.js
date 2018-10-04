
import axios from "axios";

export default class ProducerService {
    getProducers() {
        return axios({
            method: "GET",
            "url": "https://pokeapi.co/api/v2/pokemon/?limit=151"
        })
    }
}