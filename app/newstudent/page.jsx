import React from 'react'
import NewStudent from '@/components/students/NewStudent'
const page=() => {
    return (
        <div className='flex flex-col gap-y-6 rounded-2xl shadow-2xl h-[calc(100vh-100px)] px-5 pt-8 bg-white bg-opacity-55'>
            <NewStudent />
        </div>
    )
}

export default page