import React from 'react'
import { Image, View } from 'react-native'

import MyText from '../MyText'
import GradientText from './GradientText'

const Collection = () => {
  return (
    <View className='mt-[3.5rem] md:mt-[6rem] lg:mt-[5rem] relative md:flex-row md:justify-center'>
      <View><GradientText>our collection</GradientText></View>
      <View className='flex flex-col  justify-center items-center space-y-10
      md:top-[5rem] md:left-[11rem] md:absolute
      lg:flex-row lg:top-[6.6rem] lg:left-[4.2rem] lg:space-x-[7.4rem] lg:ml-20
      '>
        {/*  */}
        <View className='flex flex-col md:flex-row lg:flex-col justify-center items-center md:mt-24 lg:mt-10'>
          <Image
            style={{ width: 120, height: 140 }}
            source={require("@/assets/images/home/desktop/image-gran-espresso.png")} />
          <View>
            <MyText className="mt-10 text-size24 text-center" >Gran Expresso</MyText>
            <MyText className='max-w-[200px] font-barlowR text-size16 text-c_greyblack text-center mt-5'>
              Light and flavorful blend with cocoa and black pepper for an intense experience.
            </MyText>
          </View>
        </View>
        {/*  */}
        <View className='flex flex-col md:flex-row lg:flex-col justify-center items-center'>
          <Image
            style={{ width: 120, height: 140 }}
            source={require("@/assets/images/home/desktop/image-planalto.png")} />
          <View>
            <MyText className="mt-10 text-size24 text-center" >Planalto</MyText>
            <MyText className='max-w-[200px] font-barlowR text-size16 text-c_greyblack text-center mt-5'>
              Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
            </MyText>
          </View>
        </View>
        {/*  */}
        <View className='flex flex-col md:flex-row lg:flex-col justify-center items-center'>
          <Image
            style={{ width: 120, height: 140 }}
            source={require("@/assets/images/home/desktop/image-piccollo.png")} />
          <View>
            <MyText className="mt-10 text-size24 text-center" >Piccollo</MyText>
            <MyText className='max-w-[200px] font-barlowR text-size16 text-c_greyblack text-center mt-5'>
              Mild and smooth blend featuring notes of toasted almond and dried cherry.
            </MyText>
          </View>
        </View>
        {/*  */}
        <View className='flex flex-col md:flex-row lg:flex-col justify-center items-center'>
          <Image
            style={{ width: 120, height: 140 }}
            source={require("@/assets/images/home/desktop/image-danche.png")} />
          <View>
            <MyText className="mt-10 text-size24 text-center" >Danche</MyText>
            <MyText className='max-w-[200px] font-barlowR text-size16 text-c_greyblack text-center mt-5'>
              Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
            </MyText>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Collection