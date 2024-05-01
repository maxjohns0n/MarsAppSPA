import { useEffect, useState } from "react";
import { getRoverPhotos, RoverPhotoResponse } from "../MarsAPI";
import Photo from "./Photo";
import { Col } from "react-bootstrap";

function PhotoGallery({ currentRoverName, currentCameraType }: { currentRoverName: string, currentCameraType: string }) {
    const [photoData, setPhotoData] = useState([] as RoverPhotoResponse[]);

    useEffect(() => {
        (async function () {
            setPhotoData(await getRoverPhotos(currentRoverName, currentCameraType));
        })();
    }, [currentRoverName, currentCameraType]);

    return (
        <>
            {
                photoData.length ?
                    photoData.slice(0, 5).map((photo) => (
                        <Col>
                            <Photo src={photo.img_src} key={photo.id.toString()} alt="alt text" />
                        </Col>
                    ))
                    : <p>No photos found for this rover and camera.</p>
            }
        </>
    )
}

export default PhotoGallery;
