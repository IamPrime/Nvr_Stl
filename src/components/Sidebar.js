import Link from 'next/link'
import React from 'react'
import { FcServices } from 'react-icons/fc'
import { GiTechnoHeart } from 'react-icons/gi'
import { MdWorkHistory, MdPeopleAlt, MdContactPage, MdOutlineSettings, MdHistoryEdu } from 'react-icons/md'
import Image from 'next/image'


const Sidebar = ({ children }) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='cursor-pointer p-3 rounded-lg inline-block'>
                            <Image
                                src='/img/CheetahWS.png'
                                width={30}
                                height={60}
                                alt='CWS Logo'
                            />
                            {/*<SiNextdotjs className='text-amber-400' size={30} />*/}
                        </div>
                    </Link>

                    <span className='border-b-[1px] border-gray-300 w-full m-2'></span>

                    <Link href='/Services'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <FcServices className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/Technology'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <GiTechnoHeart className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/ThankYou'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <MdHistoryEdu className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/Work'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <MdWorkHistory className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/WhoWeAre'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <MdPeopleAlt className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/Contact'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <MdContactPage className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>

                    <Link href='/Settings'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            <MdOutlineSettings className='text-amber-400 hover:text-amber-700' size={25} />
                        </div>
                    </Link>
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar