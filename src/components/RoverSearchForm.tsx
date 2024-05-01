import { useLoaderData } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { RoverInfoResponse } from "../MarsAPI";

function RoverSearchForm({ currentRoverName, onRoverChange, currentCameraType, onCameraChange }: { currentRoverName: string, onRoverChange: any, currentCameraType: string, onCameraChange: any }) {
    const roverInfo = useLoaderData() as RoverInfoResponse[];

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newRoverName = formData.get("roverNameSelect");
        const newCameraType = formData.get("cameraTypeSelect");
        onRoverChange(newRoverName);
        onCameraChange(newCameraType);
    }

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Rover name</Form.Label>
                <Form.Select name="roverNameSelect" defaultValue={currentRoverName}>
                    {
                        roverInfo.map((rover) => (
                            <option value={rover.name} key={rover.id}>{rover.name}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Camera type</Form.Label>
                <Form.Select name="cameraTypeSelect" defaultValue={currentCameraType}>
                    {
                        roverInfo.find((rover) => rover.name === currentRoverName)?.cameras.map((camera) => (
                            <option value={camera.name} key={camera.name}>{camera.full_name}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Get photos</Button>
        </Form>
    );
}

export default RoverSearchForm;
