import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import BudgetTab from '@/components/BudgetTab';
import DiscussTab from '@/components/DiscussTab';
import ServiceTab from '@/components/ServiceTab';
import ClientForm from '@/components/ClientForm';

export default function QuoteModal() {
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
            <div className="border rounded-lg p-3 border-amber-400">
                <div className="flex items-center justify-between mb-5">
                    <div>Cheetah Web Services</div>
                    <button onClick={handleClose}>
                        <AiFillCloseCircle className='text-red-600' size={25} />
                    </button>
                </div>
                <div className="flex items-center justify-center text-red-600 font-bold mb-4 mt-4">
                    <h1 className='text-xl'>Let&apos;s Get You Started</h1>
                </div>

                {/** This section changes onClick */}
                {selectedOption === 'partOne' ?
                    (
                        <BudgetTab changeIncrease={changeIncrease} />
                    )
                    :
                    selectedOption === 'partTwo' ?
                        (
                            <DiscussTab changeIncrease={changeIncrease} />
                        )
                        :
                        selectedOption === 'partThree' ?
                            (
                                <div>
                                    
                                    {/**<AddClientForm />*/}
                                    <ClientForm />
                                </div>
                            )
                            :
                            (
                                <ServiceTab changeIncrease={changeIncrease} />
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
        </Popup>
    )

}