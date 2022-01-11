import './Car.css';

function Car(props) {
    return (
        <div className="Car">
            <h3>{props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
        </div>
    );
}

export default Car;
