import React from "react";
import { MdEmail } from 'react-icons/md';
import { FcPhone } from 'react-icons/fc';

export default function DiscussTab({ changeIncrease }) {
    return (
        <div>
            <div className='flex items-center justify-center mt-4'>
                <h3 className="mb-4 font-bold">Please Select The Best Way To Discuss This Project</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-8 mb-8'>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'
                    onClick={() => changeIncrease('partThree')}
                >
                    <MdEmail size={60} />
                    <p>
                        Please Send Me an Email
                    </p>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center cursor-pointer'
                    onClick={() => changeIncrease('partThree')}
                >
                    <FcPhone size={60} />
                    <p>
                        Please Call Me
                    </p>
                </div>
            </div>
        </div>
    )
}