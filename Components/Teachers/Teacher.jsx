import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Teacher = (props) => {
    const { teacher } = props
    const { name, matter, img } = teacher
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-5 pt-8">
                    <img src={img} alt="teachers" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <div className="flex justify-between items-center">
                        <div>
                            <p>{matter}</p>
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
export default Teacher