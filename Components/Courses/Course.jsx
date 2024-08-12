import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons"

const Course = (props) => {
    const { data } = props;
    const { course, detailes, price, rating, user, img } = data

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-3 pt-3">
                    <img src={img} alt="teachers" />

                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-semibold">{course}</h2>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">${price}</h2></div>
                    </div>
                    <p>{detailes}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="me-2 iconColor">
                                <FontAwesomeIcon icon={faUser} size="1x" />
                            </div>

                            <div className="seedTitle">
                                {user}
                            </div>
                        </div>
                        <div className="ratingContainer">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course