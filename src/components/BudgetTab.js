import React from "react";
import { TbBusinessplan } from 'react-icons/tb';

export default function BudgetTab({ changeIncrease }) {
    return (
        <div>
            <div className='flex items-center justify-center mt-4'>
                <h3>What Is Your Budget For This Project</h3>
            </div>
            <div className='flex items-center justify-center mb-4 font-bold'>
                <h1 className='text-lg'>Give an Approximate Estimate</h1>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-8 mb-8'>
                <div className='flex flex-col w-full mb-4 justify-center items-center'>
                    <button onClick={() => changeIncrease('partTwo')}
                        className='bg-blue-800 p-2 rounded-lg text-white'>
                        <p className='flex justify-between items-center'>
                            <TbBusinessplan size={30} />
                            &nbsp; Less - $50,000
                        </p>
                    </button>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center'>
                    <button onClick={() => changeIncrease('partTwo')}
                        className='bg-blue-800 p-2 rounded-lg text-white'>
                        <p className='flex justify-between items-center'>
                            <TbBusinessplan size={30} />
                            &nbsp; $50,000 - $100,000
                        </p>
                    </button>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center'>
                    <button onClick={() => changeIncrease('partTwo')}
                        className='bg-blue-800 p-2 rounded-lg text-white'>
                        <p className='flex justify-between items-center'>
                            <TbBusinessplan size={30} />
                            &nbsp; $100,000 - $150,000
                        </p>
                    </button>
                </div>
                <div className='flex flex-col w-full mb-4 justify-center items-center'>
                    <button onClick={() => changeIncrease('partTwo')}
                        className='bg-blue-800 p-2 rounded-lg text-white'>
                        <p className='flex justify-between items-center'>
                            <TbBusinessplan size={30} />
                            &nbsp; $150,000 - Above
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}