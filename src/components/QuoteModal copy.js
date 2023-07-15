import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Line } from 'rc-progress';
import { AiFillCloseCircle, AiFillApple } from 'react-icons/ai';
import { FcAndroidOs } from 'react-icons/fc';
import { IoIosDesktop } from 'react-icons/io';
import { GrTestDesktop } from 'react-icons/gr';

export default function MyPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [percent, setPercent] = useState(10);
    const [color, setColor] = useState('#3FC7FA');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
        setPrevScrollPos(currentScrollPos);

        if (scrollDirection === 'down' && currentScrollPos > 50) {
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

    const changeIncrease = () => {
        setPercent((prevPercent) => {
            let newPercent = prevPercent + 5;
            if (newPercent > 100) {
                newPercent = 100;
            }
            return newPercent;
        })
    }

    const changeReduce = () => {
        setPercent((prevPercent) => {
            let newPercent = prevPercent - 5;
            if (newPercent < 10) {
                newPercent = 10;
            }
            return newPercent;
        })
    }

    const isReduceDisabled = percent === 10; // Check if the percent is at 10%

    return (
        <Popup open={isOpen} position="right center">
            <div className='border rounded-lg p-3 border-x-amber-400'>
                <div className='flex items-center justify-between mb-5'>
                    <div>Cheetah Web Services</div>
                    <button onClick={handleClose}>
                        <AiFillCloseCircle />
                    </button>
                </div>
                <div className='flex items-center justify-center text-red-600 font-bold mb-4 mt-4'>
                    <h1 className='text-xl'>Let&apos;s Get You Started</h1>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <h3>Let Us Know What You Are Looking For</h3>
                </div>

                {/** This section changes onClick */}
                <div className='grid lg:grid-cols-2 gap-4 mt-8 mb-8'>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <AiFillApple size={60} onClick={changeIncrease} />
                        <p>
                            I need An iOS App
                        </p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <FcAndroidOs size={60} onClick={changeIncrease} />
                        <p>
                            I need An Android App
                        </p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <IoIosDesktop size={60} onClick={changeIncrease} />
                        <p>
                            I need A Web App
                        </p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <GrTestDesktop size={60} onClick={changeIncrease} />
                        <p>
                            I need A Custom App
                        </p>
                    </div>
                </div>

                {/** This section does not change on Click until the last option is selected */}
                <div className='grid items-center justify-center gap-4'>
                    <div style={{ width: '25rem' }}>
                        {/** replaced this with the div below
                        <Line 
                            percent={[percent / 2, percent / 2]}
                            strokeWidth={4}
                            strokeColor={[color, '#555']}
                            trailWidth={6}
                            strokeLinecap='round'
                        />
                        */}
                        <div style={{
                            background: `linear-gradient(90deg, #0700b8 0%, #00ff88 ${percent}%, #555 ${percent}%, #555 100%)`,
                            height: '1rem',
                            borderRadius: '0.1875rem',
                            marginTop: '-0.375rem',
                        }}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type='button' className='rounded-md bg-blue-950 text-white w-20 m-4 p-2' onClick={changeReduce} disabled={isReduceDisabled}>Back</button>
                    </div>
                </div>
            </div>
        </Popup>
    );
}
