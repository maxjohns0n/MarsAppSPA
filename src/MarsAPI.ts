import axios from 'axios';

const base_url = "http://localhost:8000";

function makeRequest(endpoint: string) {
    return axios.get(endpoint, { baseURL: base_url, timeout: 5000 });
}

async function getRoverNames(): Promise<string[]> {
    const rovers = await makeRequest("rovers");
    return rovers.data.rovers.map((rover: { name: string }) => rover.name);
}

async function getRoverPhotoUrls(roverName: string): Promise<string[]> {
    console.log(`Fetching photos for ${roverName}`);
    const photos = await makeRequest(`rovers/${roverName}/photos/fhaz`);
    return photos.data.photos.map((photo: {img_src: string}) => photo.img_src);
}

export { getRoverNames, getRoverPhotoUrls }
