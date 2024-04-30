import RoverSearchForm from "./RoverSearchForm";
import PhotoGallery from "./PhotoGallery";
import { useState } from "react";

function SearchableRoverPhotos() {
    const [currentRoverName, setCurrentRoverName] = useState("Curiosity");

    return (
        <div>
            <RoverSearchForm currentRoverName={currentRoverName} onRoverChange={setCurrentRoverName} />
            <PhotoGallery currentRoverName={currentRoverName} />
        </div>
    );
}

export default SearchableRoverPhotos;
