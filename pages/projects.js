import React from 'react'
import Navbar from '../components/Navbar';
// import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
// import PortableText from "react-portable-text"
// import Script from "next/script"

import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
const Blogs = ({profile}) => {
    const client = createClient({
        projectId: "acuxcdb1",
        dataset: "production",
        useCdn: false,
        apiVersion: "2021-10-21"
    
      });
      const builder = imageUrlBuilder(client)
      
      useEffect(() => {
        console.log("thsnks") 
        
      }, [])
  return (
    <div>
        <Navbar profile={profile} />
<div className="container my-24 px-6 mx-auto">
  <section className="mb-32 text-gray-800">
  <div className="flex justify-center items-center h-full">
                <div className="px-6 py-12 md:px-12 text-slate-800 text-center">
                  <h3 className="text-2xl uppercase font-bold mb-6">
                  SHOPISTA.com 
                  </h3>
                  <p className='text-slate-600'>
                  Shopista is an online Large Scale Web Store. It has five Categories of products and each category is further divided by colors and size. All products are managed at the backend database that each time the product purchased is decreased its quantity by one. Shopista has a secure-backed login/signup procedure using jwt. All the purchasing is handled at the back with security and all checks are applied to avoid tampering.
                  </p>
                </div>
              </div>

    <div className="flex flex-wrap items-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">Framework(Next Js) </p>
            <p className="text-gray-500">
            Shopista used Next Js framwork with Nodejs.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">JWT Login/Signup/Forgot Password</p>
            <p className="text-gray-500">
            Shopista provides a fully secure authentication procedure with token and password bycrypt.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">Stripe Payment Gateway</p>
            <p className="text-gray-500">
            Shopista provides a stripe payment service provider and Cash On Delivery Service.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">Admin Dashboard</p>
            <p className="text-gray-500">
             Shopista has Admin Dashboard where you can add, delete, update and create products.
            </p>
          </div>
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
     
        <Image src={'/assets/img/shop34.PNG'}  alt="Picture of the author" width={500} height={500}></Image> 
        <Image src={'/assets/img/shop99.PNG'}  alt="Picture of the author" width={500} height={500}></Image>  
        <Image src={'/assets/img/shop2.PNG'}  alt="Picture of the author" width={500} height={500}></Image>  
 

      </div>
    </div>
  </section>
  <section className="mb-32 text-gray-800">
  <div className="flex justify-center items-center h-full">
                <div className="px-6 py-12 md:px-12 text-slate-800 text-center">
                  <h3 className="text-2xl uppercase font-bold mb-6">
                  Shop Cart.com 
                  </h3>
                  <p className='text-slate-600'>
                  Shop Cart.com  is an online Large Scale Web Store. It has five Categories of Food Items and each category is further divided by price and section. All products are managed at the backend database that each time the product purchased is decreased its quantity by one. Shopista has a secure-backed login/signup procedure using jwt. All the purchasing is handled at the back with security and all checks are applied to avoid tampering.
                  </p>
                </div>
              </div>

    <div className="flex flex-wrap items-center">
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
     
     <Image src={'/assets/img/react121.PNG'}  alt="Picture of the author" width={500} height={500}></Image>  

     <Image src={'/assets/img/react4.PNG'}  alt="Picture of the author" width={500} height={500}></Image>  


 </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">React Web App </p>
            <p className="text-gray-500">
            Developed by using MERN Stack.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">JWT Login/Signup/Forgot Password</p>
            <p className="text-gray-500">
            Shopista provides a fully secure authentication procedure with token and password bycrypt.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">Stripe Payment Gateway</p>
            <p className="text-gray-500">
            Shopista provides a stripe payment service provider and Cash On Delivery Service.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="shrink-0">
            <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(231, 52.6%, 20%)'}}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
                </path>
              </svg>
            </div>
          </div>
          <div className="grow ml-4">
            <p className="font-bold mb-1">Admin Dashboard</p>
            <p className="text-gray-500">
             Shopista has Admin Dashboard where you can add, delete, update and create products.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </section>
</div>

    </div>
  )
}

export default Blogs

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "acuxcdb1",
        dataset: "production",
        useCdn: false,
        apiVersion: "2021-10-21"
    
      });
   
    const profileQuery = `*[_type == "profile"][0]`;
    const profile = await client.fetch(profileQuery);
    return {
      props: {
        profile
      }
    }
  }