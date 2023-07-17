import React from "react";
import { AiFillApple } from 'react-icons/ai';
import { FcAndroidOs, FcPhone } from 'react-icons/fc';
import { IoIosDesktop } from 'react-icons/io';
import { GrTestDesktop } from 'react-icons/gr';

export default function ServiceTab({ changeIncrease }) {
    return (
        <div>
            <div className='flex items-center justify-center mt-4'>
                <h3 className="font-bold">Let Us Know What You Are Looking For</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-8 mb-8'>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'>
                    <AiFillApple size={60} onClick={() => changeIncrease('partOne')} />
                    <p>
                        I need An iOS App
                    </p>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'>
                    <FcAndroidOs size={60} onClick={() => changeIncrease('partOne')} />
                    <p>
                        I need An Android App
                    </p>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'>
                    <IoIosDesktop size={60} onClick={() => changeIncrease('partOne')} />
                    <p>
                        I need A Web App
                    </p>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'>
                    <GrTestDesktop size={60} onClick={() => changeIncrease('partOne')} />
                    <p>
                        I need A Custom App
                    </p>
                </div>
            </div>
        </div>
    )
}