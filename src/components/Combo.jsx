import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Line, Circle } from 'rc-progress';
import { AiFillCloseCircle, AiFillApple } from 'react-icons/ai';
import { FcAndroidOs } from 'react-icons/fc';
import { IoIosDesktop } from 'react-icons/io';
import { GrTestDesktop } from 'react-icons/gr';

export default function MyPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [percent, setPercent] = useState(9);
    const [color, setColor] = useState('#3FC7FA');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
        setPrevScrollPos(currentScrollPos);

        if (scrollDirection === 'down' && currentScrollPos > 200) {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const changeState = () => {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        const value = parseInt((Math.random() * 100).toString(), 10);
        setPercent(value);
        setColor(colorMap[parseInt((Math.random() * 3).toString(), 10)]);
    };

    const changeIncrease = () => {
        setPercent((prevPercent) => {
            let newPercent = prevPercent + 5;
            if (newPercent > 100) {
                newPercent = 100;
            }
            return newPercent;
        });
    };

    const changeReduce = () => {
        setPercent((prevPercent) => {
            let newPercent = prevPercent - 5;
            if (newPercent < 0) {
                newPercent = 0;
            }
            return newPercent;
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

                <div className='grid lg:grid-cols-2 gap-4 mt-8 mb-8'>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <AiFillApple size={60} />
                        <p>I need An iOS App</p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <FcAndroidOs size={60} />
                        <p>I need An Android App</p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <IoIosDesktop size={60} />
                        <p>I need A Web App</p>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center items-center'>
                        <GrTestDesktop size={60} />
                        <p>I need A Custom App</p>
                    </div>
                </div>

                <div className='grid items-center justify-center gap-4'>
                    <div>
                        <h3>Line Progress {percent}%</h3>
                        <div style={{ width: '250px' }}>
                            <Line percent={percent} strokeWidth={4} strokeColor={color} />
                            <Line
                                percent={[percent / 2, percent / 2]}
                                strokeWidth={4}
                                strokeColor={[color, '#555']}
                                trailWidth={6}
                                strokeLinecap="round"
                            />
                        </div>
                        <h3>Circle Progress {percent}%</h3>
                        <div style={{ width: '250px', height: '250px', display: 'inline-block' }}>
                            <Circle percent={percent} strokeWidth={6} strokeLinecap="round" strokeColor={color} />
                        </div>
                        <div style={{ width: '250px', height: '250px', display: 'inline-block' }}>
                            <Circle percent={percent} strokeWidth={6} strokeLinecap="butt" strokeColor={color} />
                        </div>
                        <div style={{ width: '250px', height: '250px', display: 'inline-block' }}>
                            <Circle percent={percent} strokeWidth={6} strokeLinecap="square" strokeColor={color} />
                        </div>
                    </div>
                    <button onClick={changeState}>Change State</button>
                    <button onClick={changeIncrease}>Increase</button>
                    <button onClick={changeReduce}>Reduce</button>
                </div>
            </div>
        </Popup>
    );
}
