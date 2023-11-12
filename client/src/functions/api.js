import axios from "axios"


async function apiRequest() {
    const response = await axios.get('http://localhost:8080/api/v1/getChannels')
    
    return response;
}

export default apiRequest