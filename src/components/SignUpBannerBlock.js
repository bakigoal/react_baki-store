import DarkButton from "./DarkButton";
import bg from '../assets/images/icons/bg-01.jpg'

const SignUpBannerBlock = () => (
    <div className="block2 wrap-pic-w position-relative mb-3">
        <img src={bg} alt="IMG"/>

        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0">
            <h4 className="m-text4 text-center w-size3 pb-3">
                Sign up & get 20% off
            </h4>

            <p className="text-center w-size4">
                Be the frist to know about the latest fashion news and get exclu-sive offers
            </p>

            <div className="w-size2 pt-3">
                <DarkButton text="Sign up" type="submit"/>
            </div>
        </div>
    </div>
)

export default SignUpBannerBlock