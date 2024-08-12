import { faFacebook, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="container p-16 ml-auto mr-auto">
            <footer className="footer">
                <nav>
                    <h1 className="font-semibold text-2xl"><span className="title">E</span>-Learning</h1>

                </nav>

                <nav>
                    <h1 className="font-semibold text-xl">Programs</h1>
                    <a className="link link-hover">Our Programs</a>
                    <a className="link link-hover">Our Plan</a>
                    <a className="link link-hover">Become a member</a>
                </nav>
                <nav>
                    <h1 className="font-semibold text-xl">Programs</h1>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>

                    <h1 className="font-semibold text-xl">Follow Us</h1>
                    <div className="flex  items-center">
                        <div className="face me-2">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </div>
                        <div className="pin me-2">
                            <FontAwesomeIcon icon={faPinterest} size="2x" />
                        </div>
                        <div className="linked me-2">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </div>
                    </div>
                </nav>
            </footer>
        </div>

    )
}

export default Footer