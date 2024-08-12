import { promises as fs } from 'fs';
import Teacher from './Teacher';
import classes from "./Teachers.module.css"
const Teachers = async () => {
    const file = await fs.readFile(process.cwd() + '/public/teacher.json', 'utf8')
    const res = JSON.parse(file)
    return (
        <section className='container mx-auto p-16 mt-20 mb-10'>
            <article className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-2xl font-bold">Our Best Teachers</h1>
                </div>
                <div>
                    <button className={classes.viewMore}>View All</button>
                </div>
            </article>
            <article className=''>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {res.map(data => <Teacher key={data.id} teacher={data}></Teacher>)}
                </div>
            </article>
        </section>
    )
}

export default Teachers