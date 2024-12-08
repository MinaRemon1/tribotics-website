import { Content, isFilled, ImageField } from '@prismicio/client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.CaseStudyDocument[];
  contentType: Content.BlogSlice['primary']['content_type'];
  Image: ImageField;
};

export default function ContentList({ items, contentType, Image }: ContentListProps) {
  const urlPrefix = contentType === 'Blog' ? '/blog' : '/case-study';

  // Sort items by publication date (descending order)
  const sortedItems = [...items].sort((a, b) => 
    new Date(b.first_publication_date).getTime() - new Date(a.first_publication_date).getTime()
  );

  return (
    <div className='mx-[10%]'>
      {sortedItems.length === 0 ? (
        <p className='text-center py-6 text-lg font-medium text-gray-600'>
          No posts. Please, check back later.
        </p>
      ) : (
        <ul className='grid border-b border-b-slate-300'>
          {sortedItems.map((item, index) => (
            <>
              {isFilled.keyText(item.data.title) && (
                <li key={index} className='list-item opacity-0f border-t border-t-slate-300 py-6'>
                  <Link
                    href={urlPrefix + '/' + item.uid}
                    className='flex flex-col md:flex-row md:justify-between text-black'
                    aria-label={item.data.title}
                  >
                    <div className='flex items-center'>
                      {item.data.image?.url && (
                        <img
                          src={item.data.image.url}
                          alt={item.data.image.alt || item.data.title}
                          width={64}
                          height={64}
                          className='w-16 h-16 object-cover rounded-md mr-4'
                        />
                      )}
                      <div>
                        <span className='text-lg md:text-xl font-bold'>{item.data.title}</span>
                        <div className='flex flex-wrap gap-1 md:gap-3 text-violet-500 text-md font-bold'>
                          {item.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className='mt-4 md:mt-0 flex items-center gap-2 text-lg font-medium md:ml-auto'>
                      Read More<MdArrowOutward />
                    </span>
                  </Link>
                </li>
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
