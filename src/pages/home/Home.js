import React from 'react';
import MainCarousel from "./sections/MainCarousel";
import Banner from "./sections/Banner";
import FeaturedProducts from "./sections/FeaturedProducts";
import HomeBlogSection from "./sections/HomeBlogSection";
import {productService} from "../../service/ProductService";
import {blogService} from "../../service/BlogService";
import {carouselService} from "../../service/CaroselService";
import {bannerService} from "../../service/BannerService";

const Home = ({setCartItems}) => {
    return (
        <>
            <MainCarousel slides={carouselService.getSlidesForHomeCarousel()}/>
            <Banner banners={bannerService.getAllBanners()}/>
            <FeaturedProducts products={productService.getAllProducts()} setCartItems={setCartItems}/>
            <HomeBlogSection blogs={blogService.getAllBlogs()}/>
        </>
    );
}

export default Home;
