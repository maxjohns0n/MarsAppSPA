import { useEffect, useState } from "react";
import { getRoverPhotos, RoverPhotoResponse } from "../MarsAPI";
import Photo from "./Photo";

function PhotoGallery({ currentRoverName }: { currentRoverName: string }) {
    const [photoData, setPhotoData] = useState([] as RoverPhotoResponse[]);

    useEffect(() => {
        (async function () {
            setPhotoData(await getRoverPhotos(currentRoverName));
        })();
    }, [currentRoverName]);

    return (
        <div>
            {photoData.map((photo) => (
                <Photo src={photo.img_src} key={photo.id.toString()} alt="alt text" />
            ))}
        </div>
    )
}

export default PhotoGallery;
