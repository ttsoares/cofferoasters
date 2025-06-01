import React from 'react';
import { View } from 'react-native';

import IllustrationAustralia from '@/assets/images/about/desktop/illustration-australia';
import IllustrationCanada from '@/assets/images/about/desktop/illustration-canada';
import IllustrationUnitedKingdom from '@/assets/images/about/desktop/illustration-uk';
import MyText from '../MyText';

const HeadQuarters = () => {
  return (
    <View className=" mt-[8rem] md:mt-[10rem] lg:mt-[10rem] lg:px-36 w-full md:px-20 items-center md:items-start">
      <MyText className=" text-size24 font-bold text-c_grey mb-10">
        Our Headquarters
      </MyText>
      <View className='md:flex-row justify-between w-full  '>
        <View className='w-full md:w-1/3 items-center md:items-start mt-12 md:mt-10'>
          <IllustrationUnitedKingdom />
          <MyText className='text-size32 text-black font-bold mt-10'>United Kingdom</MyText>
          <MyText className='text-size18 text-c_greyblack font-barlowR mt-5'>
            68  Asfordby Rd{'\n'}
            Alcaston{'\n'}
            SY6 1YA{'\n'}
            +44 1241 918425
          </MyText>
        </View>
        <View className='w-full md:w-1/3  items-center md:items-start mt-12 md:mt-10'>
          <IllustrationCanada />
          <MyText className='text-size32 text-black font-bold mt-10'>Canada</MyText>
          <MyText className='text-size18 text-c_greyblack font-barlowR mt-5'>
            68  Asfordby Rd{'\n'}
            Alcaston{'\n'}
            SY6 1YA{'\n'}
            +44 1241 918425
          </MyText>
        </View>
        <View className='w-full md:w-1/3  items-center md:items-start mt-12 md:mt-10'>
          <IllustrationAustralia />
          <MyText className='text-size32 text-black font-bold mt-10'>Australia</MyText>
          <MyText className='text-size18 text-c_greyblack font-barlowR mt-5'>
            68  Asfordby Rd{'\n'}
            Alcaston{'\n'}
            SY6 1YA{'\n'}
            +44 1241 918425
          </MyText>
        </View>

      </View>
    </View>
  )
}

export default HeadQuarters