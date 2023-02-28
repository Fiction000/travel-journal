import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {

    return (
        <div className="card-container">
            <div className='card-travel-image-wrapper'>
                <img src={`${props.imageUrl}`} className="card-travel-image" alt='props.location'></img>
            </div>
            <div className="card-text-container">
                <div className='card-map-container'>
                    <FontAwesomeIcon icon={faLocationDot} size="sm" color='#F55A5A' />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <strong><p>{props.startDate} - {props.endDate}</p></strong>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
