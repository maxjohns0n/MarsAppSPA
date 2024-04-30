import { Form, useLoaderData } from "react-router-dom";
import { getRoverNames } from "../MarsAPI";

async function loader() {
    return await getRoverNames();
}

async function action() {
    return "here are some images";
}

function RoverSearchForm() {
    const roverNames = useLoaderData() as string[];

    return (
        <Form method="post">
            <p>{roverNames}</p>
            <button type="submit">Get photos</button>
        </Form>
    );
}

export { loader, action };
export default RoverSearchForm;
