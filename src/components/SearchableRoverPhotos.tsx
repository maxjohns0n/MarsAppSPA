import RoverSearchForm from "./RoverSearchForm";
import PhotoGallery from "./PhotoGallery";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function SearchableRoverPhotos() {
    const [currentRoverName, setCurrentRoverName] = useState("Curiosity");
    const [currentCameraType, setCurrentCameraType] = useState("fhaz");

    return (
        <div>
            <Row className="my-3">
                <Col lg={6}>
                    <RoverSearchForm currentRoverName={currentRoverName} onRoverChange={setCurrentRoverName} currentCameraType={currentCameraType} onCameraChange={setCurrentCameraType} />
                </Col>
            </Row>
            <Row className="my-3">
                <PhotoGallery currentRoverName={currentRoverName} currentCameraType={currentCameraType} />
            </Row>
        </div>
    );
}

export default SearchableRoverPhotos;
