import { useEffect, useState } from "react";
import { getRoverPhotoUrls } from "../MarsAPI";

function PhotoGallery({ currentRoverName }: { currentRoverName: string }) {
    const [photoUrls, setPhotoUrls] = useState([] as string[]);

    useEffect(() => {
        async function fetchUrls() {
            setPhotoUrls(await getRoverPhotoUrls(currentRoverName));
        }
        fetchUrls();
    }, [currentRoverName]);

    return (
        <>
            {photoUrls.map((url) => <img src={url} key={"img_"+url} alt="alt text" />)}
        </>
    )
}

export default PhotoGallery;
