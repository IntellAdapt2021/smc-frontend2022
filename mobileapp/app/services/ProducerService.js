import axios from "axios";

export default class ProducerService {
    getProducers() {
        return axios.get(
            "http://sdn.power2peer.com/transactionapi/api/registeredusers/search/findByTypeAndLocationNearOrderByPricePerKwhAsc?type=PRODUCER&location=0,0&distance=100mi");
        //return axios.get("http://localhost:8080/api/registeredusers/search/findByTypeAndLocationNearOrderByPricePerKwhAsc?type=PRODUCER&location=0,0&distance=100mi");
    }
}