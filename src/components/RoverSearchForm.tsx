import { useLoaderData } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function RoverSearchForm({ currentRoverName, onRoverChange } : { currentRoverName: string, onRoverChange: any }) {
    const roverNames = useLoaderData() as string[];

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const selectValue = formData.get("roverNameSelect");
        onRoverChange(selectValue);
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Rover name</Form.Label>
                <Form.Select name="roverNameSelect" defaultValue={currentRoverName}>
                    {
                        roverNames.map((name) => (
                            <option value={name} key={name}>{name}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Get photos</Button>
        </Form>
    );
}

export default RoverSearchForm;
