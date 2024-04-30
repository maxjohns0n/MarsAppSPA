import axios from 'axios';

const base_url = "http://localhost:8000";

interface RoverPhotoResponse {
    id: number,
    img_src: string,
    sol: number,
    earth_date: string
}

function makeRequest(endpoint: string) {
    return axios.get(endpoint, { baseURL: base_url, timeout: 5000 });
}

async function getRoverNames(): Promise<string[]> {
    const rovers = await makeRequest("rovers");
    return rovers.data.rovers.map((rover: { name: string }) => rover.name);
}

async function getRoverPhotos(roverName: string): Promise<RoverPhotoResponse[]> {
    console.log(`Fetching photos for ${roverName}`);
    const photos = await makeRequest(`rovers/${roverName}/photos/fhaz`);
    return photos.data.photos;
}

export { getRoverNames, getRoverPhotos };
export type { RoverPhotoResponse };
