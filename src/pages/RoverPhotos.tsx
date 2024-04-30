import TitleAndDescription from '../components/TitleAndDescription';
import SearchableRoverPhotos from '../components/SearchableRoverPhotos';

function RoverPhotos() {
    return (
        <>
            <TitleAndDescription title='Mars Rover Photos' description='Use this page to view images from the various Mars rovers.' />
            <SearchableRoverPhotos />
        </>
    );
}

export default RoverPhotos;
