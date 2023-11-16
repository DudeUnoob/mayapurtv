import axios from "axios"


async function apiRequest() {
    const response = await axios.get('https://mayapurtv.damodarkamani.repl.co/api/v1/getChannels')
    
    return response;
}

export default apiRequest