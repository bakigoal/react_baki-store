import banner1 from "../assets/images/banner-01.jpg";
import banner2 from "../assets/images/banner-02.jpg";
import banner3 from "../assets/images/banner-03.jpg";
import banner4 from "../assets/images/banner-04.jpg";
import banner5 from "../assets/images/banner-05.jpg";
import banner6 from "../assets/images/banner-06.jpg";

class BannerService {
    getAllBanners() {
        return [
            [
                {img: banner1, label:"Dresses"},
                {img: banner2, label:"Sunglasses"}
            ],
            [
                {img: banner3, label:"Watches"},
                {img: banner4, label:"Footwear"}
            ],
            [
                {img: banner5, label:"Bags"},
                {img: banner6, label:"Accessories"}
            ],
        ]
    }
}

export const bannerService = new BannerService()