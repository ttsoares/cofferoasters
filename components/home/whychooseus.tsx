import React from 'react'
import { View } from 'react-native'

import IconCoffeeBean from '@/assets/images/home/desktop/icon-coffee-bean'
import IconGift from '@/assets/images/home/desktop/icon-gift'
import IconTruck from '@/assets/images/home/desktop/icon-truck'

import MyText from '../MyText'

const whychooseus = () => {
  return (
    <View className='mt-[9rem] md:mt-[60rem] lg:mt-[20rem] w-full px-5 md:px-10 lg:px-20'>
      <View className='w-full h-[65rem] md:h-[50rem] lg:h-[36rem] bg-c_greyblack items-center rounded-xl'>
        <MyText className='text-white text-size40 font-bold mt-20 mb-10 text-center'>Why choose us?</MyText>
        <MyText className='text-white font-barlowR text-size16 text-center md:w-[78%] lg:w-[30%] '>
          A large part of our role is choosing which particular coffees will be featured
          in our range. This means working closely with the best coffee growers to give
          you a more impactful experience on every level.
        </MyText>
        <View className='flex-col lg:flex-row justify-center gap-12 mt-[7.5rem] lg:mt-[3.75rem] '>
          {/*  */}
          <View className='bg-c_cyan rounded-xl justify-start items-center w-[90%] mx-auto h-[25rem] py-12
                            md:w-[41rem] md:py-0 md:h-[16rem] md:flex-row md:mx-0
                            lg:w-[21.8rem] lg:h-[23.75rem] lg:pt-20 lg:flex-col lg:items-center
          '>
            <IconCoffeeBean className='md:ml-20 lg:ml-0 mb-10 md:mb-0' />
            <View className='w-[60%] md:ml-16 lg:ml-0'>
              <MyText className='text-center md:text-left lg:text-center text-white text-size24 font-bold lg:mt-16 mb-6'>
                Best quality
              </MyText>
              <MyText className='text-center md:text-left lg:text-center text-white font-barlowR text-size16'>
                Discover an endless variety of the world&apos;s best artisan coffee from each of our roasters.
              </MyText>
            </View>
          </View>
          {/*  */}
          <View className='bg-c_cyan rounded-xl justify-start items-center w-[90%] mx-auto h-[25rem] py-12
                            md:w-[41rem] md:py-0 md:h-[16rem] md:flex-row md:mx-0
                            lg:w-[21.8rem] lg:h-[23.75rem] lg:pt-20 lg:flex-col lg:items-center
          '>
            <IconGift className='md:ml-20 lg:ml-0 ' />
            <View className='w-[60%] md:ml-16 lg:ml-0  '>
              <MyText className='text-center md:text-left lg:text-center text-white text-size24 font-bold mt-10 mb-6'>
                Exclusive benefits
              </MyText>
              <MyText className='text-center md:text-left lg:text-center text-white font-barlowR text-size16'>
                Special offers and swag when you subscribe, including 30% off your first shipment.
              </MyText>
            </View>
          </View>
          {/*  */}
          <View className='bg-c_cyan rounded-xl justify-start items-center w-[90%] mx-auto h-[25rem] py-12
                            md:w-[41rem] md:py-0 md:h-[16rem] md:flex-row md:mx-0
                            lg:w-[21.8rem] lg:h-[23.75rem] lg:pt-20 lg:flex-col lg:items-center
          '>
            <IconTruck className='md:ml-20 lg:ml-0' />
            <View className='w-[60%] md:ml-16 lg:ml-0'>
              <MyText className='text-center md:text-left lg:text-center text-white text-size24 font-bold mt-16 mb-6'>
                Free shipping
              </MyText>
              <MyText className='text-center md:text-left lg:text-center text-white font-barlowR text-size16'>
                We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
              </MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default whychooseus