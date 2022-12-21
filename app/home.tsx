'use client';
import Image from 'next/image';
import photo from '../public/foto-cv.jpeg';

export default function Home() {
  return (

    <div className=" bg-white dark:bg-slate-800 min-h-screen mx-auto px-4">
      <h1 className=" font-roboto text-5xl text-center text-blue-900 dark:text-blue-300">Gonzalo Zucca</h1>
      <h2 className="text-1xl text-center text-black dark:text-gray-200 ">Full-Stack Developer</h2>

      <div className='relative rounded-full w-80 h-80 my-4 overflow-hidden mx-auto'>
        <Image priority src={photo} alt='photo' className='object-cover' />
      </div>

      <div className="flex flex-wrap -mx-4">

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white dark:bg-gray-400 rounded shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor velit ut ipsum efficitur,
              sit amet elementum nibh fringilla. Aliquam a elit ac nunc ultricies viverra.
            </p>
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View project
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white dark:bg-gray-400 rounded shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Project 2</h2>
            <p className="text-gray-700 dark:text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor velit ut ipsum efficitur,
              sit amet elementum nibh fringilla. Aliquam a elit ac nunc ultricies viverra.
            </p>
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View project
            </a>
          </div>
        </div>

      </div>

    </div>

  )
}
