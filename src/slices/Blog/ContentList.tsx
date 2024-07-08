import { Content, isFilled } from '@prismicio/client'
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


type ContentListProps ={
    items: Content.BlogPostDocument[] | Content.CaseStudyDocument[];
    contentType: Content.BlogSlice["primary"]["content_type"];
    Image: Content.BlogSlice["primary"]["image"];
}

export default function ContentList({items, contentType, Image}: ContentListProps) {

    const urlPrefix = contentType === "Blog" ? "/blog" : "/case-study"

  return (
    <div>
        <ul className='grid border-b border-b-slate-300 mx-[10%]'>
            {items.map((item, index)=>(
                <>
                {isFilled.keyText(item.data.title) && (
                    <li key={index} className='list-item opacity-0f'>
                        <Link href={urlPrefix + "/" + item.uid} className='flex flex-col justify-between border-t border-t-slate-300 py-10 text-black md:flex-row' aria-label={item.data.title}>
                            <div className='flex flex-col'>
                                <span className='text-2xl font-bold'>{item.data.title}</span>
                                <div className='flex-gap-3 text-violet-500 text-md font-bold'>
                                    {item.tags.map((tag, index)=>(
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <span className='ml-auto flex items-center gap-2 text-lg font-medium md:ml-0'>Read More<MdArrowOutward/></span>
                        </Link>
                    </li>
                    )}
                </>
            ))}
        </ul>
    </div>
  )
}
