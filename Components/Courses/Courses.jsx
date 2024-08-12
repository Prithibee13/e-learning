import Course from "./Course"
import { promises as fs } from 'fs';
import classes from "./Courses.module.css"

const Courses = async() =>
{
    const file = await fs.readFile(process.cwd() + '/public/courses.json' , 'utf8')
    const res = JSON.parse(file)
    return(
        <section className="container mt-20 mb-10 mx-auto  p-16">
            <article className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-2xl font-bold">Our popular Courses</h1>
                </div>
                <div>
                    <button className={[classes.viewMore]}>View All</button>
                </div>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    res.map(data=><Course key={data.id} data={data}></Course>)
                }
            </article>
        </section>
    )
}

export default Courses