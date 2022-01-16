import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import {changeTitle} from "../utils/TitleUtil";
import InfoButton from "../components/InfoButton";
import Container from "react-bootstrap/Container";

const title = "Home"

const Home = () => {
    changeTitle(title)
    return (
        <Container className="mb-4">
            <h1>Welcome To React-Bootstrap</h1>
            <h2>Using Sass with custom theming</h2>
            <AlertDismissibleExample/>
            <hr/>
            <p>
                You can check further in information on the official Bootstrap docs{' '}
                <a
                    href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </p>
        </Container>
    );
};

const AlertDismissibleExample = () => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>
                    I am an alert of type <span className="dangerText">danger</span>! But
                    my color is Teal!
                </Alert.Heading>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
                <p>
                    By the way the button you just clicked is an{' '}
                    <span className="infoText">Info</span> button but is using the color
                    Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium debitis deleniti distinctio impedit officia reprehenderit
                    suscipit voluptatibus. Earum, nam necessitatibus!
                </p>
            </Alert>
        );
    }
    return (
        <div>
            <InfoButton onClick={() => setShow(true)}>
                Show Custom Styled Alert
            </InfoButton>
        </div>
    );
};

export default Home;
