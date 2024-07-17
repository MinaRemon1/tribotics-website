import { Content } from '@prismicio/client'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

type ContentListProps ={
    items: Content.CareerDocument[]
}

const ContentList = ({items}: ContentListProps) => {
  return (
    <div>
        <ul>
            {items.map((item, index)=>(
            <li key={index}>
                <a href="">
                    <div>
                        <span>{item.data.title}</span>
                        <div>
                            <span>{item.data.date}</span>
                        </div>
                    </div>
                    <span>Read More<MdArrowOutward /></span>
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ContentList