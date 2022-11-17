import React from 'react';
import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import ReviewCard from './ReviewCard';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            country: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people3
        },
    ]
    return (
        <section className='mt-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-2xl text-primary font-bold mb-2'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <figure className='w-[192px] h-[156px]'>
                <img src={quote} alt=''/>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}>

                </ReviewCard>)
            }
            </div>
        </section>
    );
};

export default Testimonial;