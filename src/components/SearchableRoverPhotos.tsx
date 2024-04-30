import { Outlet } from "react-router-dom";
import RoverSearchForm from "./RoverSearchForm";

function SearchableRoverPhotos() {
    return (
        <div>
            <RoverSearchForm />
            <Outlet />
        </div>
    );
}

export default SearchableRoverPhotos;
