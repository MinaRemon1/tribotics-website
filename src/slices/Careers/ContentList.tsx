import { Content, isFilled } from '@prismicio/client'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

type ContentListProps = {
    items: Content.CareerDocument[]
}

const urlPrefix = "/career"

const ContentList = ({ items }: ContentListProps) => {
    return (
        <div className='mx-[10%]'>
            {items.length === 0 ? (
                <p className='text-center py-6 text-lg font-medium text-gray-600'>
                    No open positions. Please, check back soon.
                </p>
            ) : (
                <ul className='grid border-b border-b-slate-300 py-6'>
                    {items.map((item, index) => (
                        <>
                            {isFilled.keyText(item.data.title) && (
                                <li key={index} className='list-item opacity-0f'>
                                    <Link href={urlPrefix + "/" + item.uid} className='flex flex-col justify-between border-t border-t-slate-300 py-10 text-black md:flex-row' aria-label={item.data.title}>
                                        <div className='flex flex-col'>
                                            <span className='text-3xl font-bold'>{item.data.title}</span>
                                            <div className='flex gap-3'>
                                                <span>{item.data.date}</span>
                                            </div>
                                        </div>
                                        <span className='mt-4 md:mt-0 flex items-center gap-2 text-lg font-medium md:ml-auto'>Learn More<MdArrowOutward /></span>
                                    </Link>
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ContentList
