import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillCloseCircle, AiFillApple } from 'react-icons/ai';
import { FcAndroidOs, FcPhone } from 'react-icons/fc';
import { IoIosDesktop } from 'react-icons/io';
import { GrTestDesktop } from 'react-icons/gr';
import { TbBusinessplan } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import ClientForm from '@/components/ClientForm';

export default function MyPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [percent, setPercent] = useState(10);
    const [selectedOption, setSelectedOption] = useState('');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
        setPrevScrollPos(currentScrollPos);

        if (scrollDirection === 'down' && currentScrollPos > 10) {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const changeIncrease = (option) => {
        setSelectedOption(option);
        setPercent((prevPercent) => {
            let newPercent = prevPercent + 30;
            if (newPercent > 100) {
                newPercent = 100;
            }
            return newPercent;
        })
    }

    const changeReduce = () => {
        setPercent((prevPercent) => {
            let newPercent = prevPercent - 30;
            if (newPercent < 10) {
                newPercent = 10;
            }
            return newPercent;
        })

        setSelectedOption((prevOption) => {
            if (prevOption === 'partThree') {
                return 'partTwo';
            } else if (prevOption === 'partTwo') {
                return 'partOne';
            } else if (prevOption === 'partOne') {
                return '';
            }

            return prevOption;
        })
    }

    const isReduceDisabled = percent === 10; // Check if the percent is at 10%

    return (
        <Popup open={isOpen} position="right center">
            <div className='border rounded-lg p-3 border-amber-400'>
                <div className='flex items-center justify-between mb-5'>
                    <div>Cheetah Web Services</div>
                    <button onClick={handleClose}>
                        <AiFillCloseCircle className='text-red-600' size={25} />
                    </button>
                </div>
                <div className='flex items-center justify-center text-red-600 font-bold mb-4 mt-4'>
                    <h1 className='text-xl'>Let&apos;s Get You Started</h1>
                </div>

                {/** This section changes onClick */}
                {selectedOption === 'partOne' ?
                    (
                        <div>
                            <div className='flex items-center justify-center mt-4'>
                                <h3>What Is Your Budget For This Project</h3>
                            </div>
                            <div className='flex items-center justify-center font-bold'>
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
                    ) : selectedOption === 'partTwo' ?
                        (
                            <div>
                                <div className='flex items-center justify-center mt-4'>
                                    <h3>Please Select The Best Way To Discuss This Project</h3>
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
                        ) : selectedOption === 'partThree' ?
                            (
                                <div>
                                    <div className='flex items-center justify-center mt-4'>
                                        <h3>All The Fields Are Required</h3>
                                    </div>
                                    <div className='flex items-center justify-center mb-4 font-bold'>
                                        <h1 className='text-lg'>No Spam Ever | We Promise</h1>
                                    </div>
                                    {/**<AddClientForm />*/}
                                    <ClientForm />
                                </div>
                            ) :
                            (
                                <div>
                                    <div className='flex items-center justify-center mt-4'>
                                        <h3>Let Us Know What You Are Looking For</h3>
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

                {/** This section does not change on Click until the last option is selected */}
                <div className='grid items-center justify-center gap-4'>
                    <div style={{ width: '25rem' }}>
                        <div style={{
                            background: `linear-gradient(90deg, #0700b8 0%, #00ff88 ${percent}%, #555 ${percent}%, #555 100%)`,
                            height: '1rem',
                            borderRadius: '0.1875rem',
                            marginTop: '-0.375rem',
                        }}
                        />
                    </div>
                    {
                        percent < 100 ?
                            (
                                <div className='flex justify-center items-center'>
                                    <button type='button' className='rounded-md bg-blue-950 text-white w-20 m-4 p-2' onClick={changeReduce} disabled={isReduceDisabled}>Back</button>
                                </div>
                            ) :
                            (
                                <div className='flex justify-center items-center'>
                                    <button type='button' className='rounded-md bg-blue-950 text-white w-20 m-4 p-2' onClick={changeReduce} disabled={isReduceDisabled}>Back</button>
                                </div>
                            )
                    }
                </div>
            </div>
        </Popup >
    );
}
