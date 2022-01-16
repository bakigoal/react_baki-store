import {useEffect} from 'react';

export function changeTitle(title) {
    useEffect(() => {
        const oldTitle = document.title;
        title && (document.title = title);
        // following line is optional, but will reset title when component unmounts
        return () => document.title = oldTitle;
    }, [title]);
}