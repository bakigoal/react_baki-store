import {useEffect} from "react";

const DEFAULT_TITLE = "My App Title";

const Page = props => {
    useEffect(() => {
        document.title = props.title || DEFAULT_TITLE;
    }, [props.title]);
    return props.children;
};

export default Page;