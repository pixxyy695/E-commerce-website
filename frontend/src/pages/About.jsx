import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}></Title>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio officiis praesentium nostrum corporis iusto inventore quibusdam placeat minus provident, laborum quae consequatur quisquam itaque molestiae quaerat magni fugiat perferendis?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias labore, impedit adipisci corporis explicabo voluptates cupiditate in a repudiandae odio perspiciatis aspernatur velit provident error deserunt totam culpa autem laboriosam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience and confidence. we're dedicated to provide a seamless shopping experience that exceeds expectations,from browsing and ordering to delivery and beyond</p>
           </div>
          </div>
           <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={' CHOOSE US'}></Title>

           </div>
           <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 pt-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance</b>
              <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards </p>
              </div>
              <div className='border px-10 md:px-16 pt-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience</b>
              <p className='text-gray-600'>User-friendly</p>
              </div>
              <div className='border px-10 md:px-16 pt-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service</b>
              <p className='text-gray-600'>User-friendly</p>
              </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About
