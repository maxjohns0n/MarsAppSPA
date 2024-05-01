import axios from 'axios';

const base_url = "http://localhost:8000";

interface RoverInfoResponse {
    id: number,
    name: string,
    status: string,
    cameras: {
        name: string,
        full_name: string
    }[]
}

interface RoverPhotoResponse {
    id: number,
    img_src: string,
    sol: number,
    earth_date: string
}

function makeRequest(endpoint: string) {
    return axios.get(endpoint, { baseURL: base_url, timeout: 5000 });
}

async function getRoverInfo(): Promise<RoverInfoResponse[]> {
    const rovers = await makeRequest("rovers");
    return rovers.data.rovers;
}

async function getRoverPhotos(roverName: string, cameraType: string): Promise<RoverPhotoResponse[]> {
    console.log(`Fetching photos for ${roverName}`);
    const photos = await makeRequest(`rovers/${roverName}/photos/${cameraType}`);
    return photos.data.photos;
}

export { getRoverInfo, getRoverPhotos };
export type { RoverInfoResponse, RoverPhotoResponse };
