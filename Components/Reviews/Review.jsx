import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const Review = (props) => {
    const { review } = props
    const { img, name, course, batch } = review
    return (
        <article>
            <div className=" w-full ">
                <figure>
                    <img className="rounded-xl" src={img} alt="play" />
                </figure>
                <div className="mt-5 p-2">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <article className="flex justify-between items-center">

                        <div>

                            <p>{course} student</p>
                            <p>Batch - {batch}</p>
                        </div>

                        <div className="ratingContainer">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </article>


                </div>
            </div>
        </article>
    )
}

export default Review