import axios from "axios"


async function apiRequest() {
    const response = await axios.get('http://192.168.86.235:8080/api/v1/getChannels')
    
    return response;
}

export default apiRequest