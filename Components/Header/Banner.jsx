import Image from "next/image"
import pix3 from "../../Assets/pix3.png"
import classes from "./Header.module.css"
import pix10 from "../../Assets/pix10.png"
import pix2 from "../../Assets/pix2.jpg"
import pix4 from "../../Assets/pix4.jpg"
import pix8 from "../../Assets/pix8.png"
const Banner = () => {
    return (
        <section className="px-36 py-20">
            <article className="grid md:grid-cols-2 grid-cols-1 gap-10 ">

                <div className="my-auto">
                    <p className={`py-2 ${classes.sub}`}>Find your best teacher...</p>
                    <h1 className="text-5xl font-bold">Grow Your <span className={`${classes.blue} rounded-xl p-1`}>Skill</span>, <span className="block">Define Your <span className={`${classes.blue} block rounded-xl p-1`}>Future</span></span></h1>

                    <article className="flex py-3">
                        <button className="btn me-6">Get Started</button>
                        <div className="flex items-center">
                            <Image src={pix10} className={classes.play} alt='play'></Image>
                            <p className="ms-6">Watch Video</p>
                        </div>
                    </article>

                    <div>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <Image src={pix2}></Image> 
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <Image src={pix4}></Image>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <Image src={pix2}></Image> 
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <Image src={pix4}></Image> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Image src={pix8} alt="banner-Image" className="w-full"></Image>
                </div>
            </article>
        </section>
    )
}

export default Banner