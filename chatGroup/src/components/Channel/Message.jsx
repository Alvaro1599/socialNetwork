import React from 'react';

export default function Message(props) {
    return (
        <div className='p-2 w-full flex'>
            <div className='w-1/12 mob:w-2/12 mob:mr-2 flex justify-center'>
                <div className='w-[48px] bg-white h-[48px]' />
            </div>
            <div className='w-11/12 flex flex-col'>
                <div className='w-full text-secondary-low flex'>
                    <h1 className=' font-bold mr-4'>Name Profile</h1>
                    <p>ayer</p>
                </div>
                <p className='w-full whitespace-pre-wrap  '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, obcaecati? Veritatis sunt, totam
                    ratione necessitatibus dolorem porro accusantium est quas ipsum ipsam ad natus blanditiis sapiente!
                    Ut accusamus reprehenderit facilis.
                </p>
            </div>
        </div>
    );
}
