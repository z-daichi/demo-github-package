"use client";
import { useState } from 'react';
import cat from './cat.png'

export const DemoComponent = () => {
    const [isShow, setIsShow] = useState(false);
    
    return (
        <div className='p-10'>
            <button
                className="group relative bg-gray-100 rounded-md p-1 w-20 h-15 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setIsShow((prev) => !prev)}
            >
                <div
                    className="absolute p-2 top-0 left-[10%] w-[80%] bg-black rounded-lg text-center text-white z-[-1] duration-300"
                    style={{
                        top: !isShow ? '10px' : '-50px',
                    }}
                >
                    ｼｬｰ!!!!!
                </div>
                <img src={cat} alt="cat" className='object-contain size-full group-hover:animate-[bounce_.2s_ease-in-out_infinite]' />
            </button>
        </div>
    )
}