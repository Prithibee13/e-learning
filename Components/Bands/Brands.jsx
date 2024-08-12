import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockFour, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const Brands = () => {
    return (
        <article className="px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <article>
                    <div className="card bg-base-100 w-full -mt-16 shadow-xl">
                        <div className="card-body">

                            <article className="flex  items-center">
                                <div className="me-5 iconColor">
                                    <FontAwesomeIcon icon={faUsersViewfinder} size="3x" />
                                </div>
                                <div>

                                    <h2 className="font-bold text-2xl seedTitle">99+ Courses</h2>
                                    <p>The automated process all your website task</p>
                                </div>
                            </article>


                        </div>
                    </div>
                </article>
                <article>
                    <div className="card bg-base-100 w-full -mt-16 shadow-lg">
                        <div className="card-body">
                            <article className="flex  items-center">
                                <div className="me-5 iconColor">
                                    <FontAwesomeIcon icon={faUser} size="3x" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-2xl seedTitle">Expert Teachers</h2>
                                    <p>The automated process all your website task</p>
                                </div>
                            </article>

                        </div>
                    </div>
                </article>
                <article>
                    <div className="card bg-base-100 w-full -mt-16 shadow-xl">
                        <div className="card-body">
                            <article className="flex justify-evenly items-center">
                                <div className="me-5 iconColor">
                                    <FontAwesomeIcon icon={faClockFour} size="3x" />
                                </div>
                                <div>

                                    <h2 className="text-2xl font-bold seedTitle">Life Time Access</h2>
                                    <p>The automated process all your website task</p>
                                </div>
                            </article>

                        </div>
                    </div>
                </article>
            </div>
        </article>
    )
}
export default Brands