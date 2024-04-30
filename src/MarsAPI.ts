import axios from 'axios';

const base_url = "http://localhost:8000";

function makeRequest(endpoint: string) {
    return axios.get(endpoint, { baseURL: base_url, timeout: 5000 });
}

async function getRoverNames(): Promise<string[]> {
    const rovers = await makeRequest("rovers");
    return rovers.data.rovers.map((rover: { name: string }) => rover.name);
}

export { getRoverNames }
