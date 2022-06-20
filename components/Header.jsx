import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Header = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-white-400 py-8'>
        <div className='md:float-left block'>
            <Link href='/'>
                <span className='cursor-pointer font-bold text-4xl text-white'>
                    Bloggo
                </span>
            </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='md:float-right mt-2 align-middle inline-block bg-white text-lg font-medium rounded-full text-black px-8 py-3 cursor-pointer ml-4 font-semibold transaition duration-100 hover:text-yellow-600'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>    
      </div>
    </div>
  )
}

export default Header
