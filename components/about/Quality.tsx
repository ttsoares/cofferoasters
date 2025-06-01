import MyText from '@/components/MyText';
import { Image, ImageBackground, useWindowDimensions, View } from 'react-native';

const Quality = () => {

  const { width } = useWindowDimensions();

  const imageSource1 =
    width >= 1440
      ? require("@/assets/images/about/desktop/bg-quality.png")
      : width >= 768
        ? require("@/assets/images/about/tablet/bg-quality.png")
        : require("@/assets/images/about/mobile/bg-quality.png");

  const imageSource2 =
    width >= 1440
      ? require("@/assets/images/about/desktop/image-quality.jpg")
      : width >= 768
        ? require("@/assets/images/about/tablet/image-quality.jpg")
        : require("@/assets/images/about/mobile/image-quality.jpg");


  return (
    <View className='w-[90%] mt-[12rem] md:mt-[18rem] lg:mt-[17rem] h-[31rem]  md:h-[37rem]'>
      <ImageBackground
        source={imageSource1}
        resizeMode="cover"
        style={{
          width: '100%', height: '100%', overflow: 'visible', position: 'relative'
        }}
        alt="Gray background"
      >
        <View className='w-full lg:w-1/2 h-full'>
          <View className='mt-28 md:mt-56 lg:mt-32 lg:ml-16'>
            <MyText className="text-size32 md:text-size40 font-black text-center lg:text-left text-white">
              Uncompromising quality
            </MyText>
            <MyText className='text-size16  mx-auto text-center max-w-[90%] text-white
                              md:text-size18 md:max-w-[83%]
                              lg:mx-0 font-barlowR lg:text-left mt-5  lg:max-w-full lg:pt-9
                              '
            >
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </MyText>
          </View>
        </View>
        <View className='absolute rounded-xl overflow-hidden
              aspect-[279/156] w-[279px] left-8 -top-20
              md:-top-[9.5rem] md:left-[4rem] md:aspect-[573/320] md:w-[573px]
              lg:-top-[6rem] lg:left-[46rem] lg:aspect-[445/474] lg:w-[445px]
              '
        >
          <Image
            source={imageSource2}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
            className='rounded-xl absolute '
            alt="A table with coffee tools"
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Quality