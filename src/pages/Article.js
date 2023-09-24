import { Image } from "react-bootstrap";
import { useLocation} from "react-router-dom";

function Article() {
    const location = useLocation().state;
    console.log(location);
    return (
        <div className="row col m-5 text-left p-5 fw-bold">
            <h2 className='text-white font-weight-bold ml-5 mr-5 text-center'> {location.title} </h2>
            <Image className="mb-5" style={{height: '35rem'}} src={location.imageUrl}/>
            <p>{location.description}</p>
            <div className="p-5 mb-5 bg-light">
                <h5 className="mb-4">Experts Comment</h5>
                <p>{location.expertComment}</p>
            </div>
        </div>
    );
}

export default Article;