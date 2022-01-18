import React from 'react';

import slide1 from '../../assets/images/master-slide-01.jpg'
import slide2 from '../../assets/images/master-slide-02.jpg'
import slide3 from '../../assets/images/master-slide-03.jpg'
import feat1 from '../../assets/images/item-01.jpg'
import feat2 from '../../assets/images/item-02.jpg'
import feat3 from '../../assets/images/item-03.jpg'
import feat4 from '../../assets/images/item-04.jpg'
import MainCarousel from "./sections/MainCarousel";
import Banner from "./sections/Banner";
import Product from "../../model/Product";
import FeaturedProducts from "./sections/FeaturedProducts";
import HomeBlogSection from "./sections/HomeBlogSection";
import BlogService from "../../service/BlogService";

const Home = () => {
    return (
        <>
            <MainCarousel slides={slides}/>
            <Banner/>
            <FeaturedProducts products={featuredProducts} />
            <HomeBlogSection blogs={blogs}/>
        </>
    );
}

export default Home;

const slides = [
    {
        img: slide1,
        label: "First slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        img: slide2,
        label: "Second slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img: slide3,
        label: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },
]

const featuredProducts = [
    new Product(feat1, "Boxy7 T-Shirt with Roll Sleeve", 20.0),
    new Product(feat2, "Denim jacket blue", 92.5),
    new Product(feat3, "Coach slim easton black", 165.9),
    new Product(feat4, "Frayed denim shorts", 29.5),
    new Product(feat1, "Herschel supply co 25l", 75.0),
    new Product(feat2, "Denim jacket blue", 92.5),
    new Product(feat3, "Coach slim easton black", 165.9),
    new Product(feat4, "Frayed denim shorts", 29.5),
]

const blogs = new BlogService().getAllBlogs()