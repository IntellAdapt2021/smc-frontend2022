import axios from "axios";

export default class ProducerService {
    getProducers() {
        return axios.get("http://sdn.power2peer.com/transactionapi/api/registeredusers/search/findByType?type=PRODUCER");
        
    }
}