import {Card} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import TextFormatter from "../utils/TextFormatter";

const BlogBlock = ({blog}) => (
    <Card className="mb-4" border="white">
        <div className="hov-img-zoom">
            <Card.Img variant="top" className="hov-pointer" src={blog.img} alt={blog.title}/>
        </div>
        <Card.Body className="ps-0 pe-0">
            <Card.Title className="pb-2 m-text11"><Link to="blog">{blog.title}</Link></Card.Title>
            <Card.Subtitle>
                <span className="s-text6">by </span>
                <span className="s-text7">{blog.author}</span>
                <span className="s-text6"> on </span>
                <span className="s-text7">{TextFormatter.formatDate(blog.date)}</span>
            </Card.Subtitle>
            <Card.Text className="pt-3">
                <span className="s-text8">
                    {TextFormatter.truncate(blog.text, 130)}
                </span>
            </Card.Text>
        </Card.Body>
    </Card>
)

export default BlogBlock