import { promises as fs } from 'fs';
import Review from './Review';
const Reviews = async() =>
{
    const file = await fs.readFile(process.cwd() + '/public/review.json', 'utf8')
    const res = JSON.parse(file)
    return(
        <section className="mt-20 mb-10 p-16">
            <article className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-2xl font-bold">Our Success Student Review</h1>
                </div>
                <div>
                    <button className='viewMore'>View All</button>
                </div>
            </article>

            <div className="grid grid cols-1 md:grid-cols-3 gap-16">
                {res.map(review=> <Review key ={review.id} review={review}></Review>)}
            </div>
        </section>
    )
}

export default Reviews