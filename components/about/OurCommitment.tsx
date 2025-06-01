import MyText from '@/components/MyText';
import { Image, useWindowDimensions, View } from 'react-native';

const OurCommitment = () => {

  const { width } = useWindowDimensions();

  const imageSource =
    width >= 1440
      ? require("@/assets/images/about/desktop/image-commitment.jpg")
      : width >= 768
        ? require("@/assets/images/about/tablet/image-commitment.jpg")
        : require("@/assets/images/about/mobile/image-commitment.jpg");

  return (
    <View className='flex-col md:flex-row w-full  mt-[4rem] justify-center items-center '>
      <View
        // Those numbers are from Figma and are also the dimensions in the image files.
        // Tha could be translated to percentages.
        /*
        <View className='w-[87.2%] aspect-[327/400]
                        md:w-[36.6%] md:aspect-[281/470]
                        lg:w-[30.9%] lg:aspect-[445/520] '>
        Because
        sm	375px	327px (~87.2%)
        md	768px	281px (~36.6%)
        lg	1440px	445px (~30.9%)
        */
        className='rounded-xl overflow-hidden
             aspect-[327/400] w-[327px]
             md:aspect-[281/470] md:w-[281px] md:ml-10
             lg:aspect-[445/520] lg:w-[445px] lg:ml-7'
      >
        <Image
          source={imageSource}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
          alt="Man making coffee"
        />
      </View>
      <View className='md:ml-8 w-[90%] md:w-[40%]  lg:ml-20 '>
        <View className='mt-6 lg:mt-20 md:w-[97%] lg:w-[90%]  '>
          <MyText className="text-size24  md:text-size32 lg:text-size40 font-black text-center md:text-left">
            Our commitment
          </MyText>
          <MyText className='text-size16 font-barlowR text-c_greyblack text-center md:text-left mt-5'>
            We&rsquo;re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world&rsquo;s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
          </MyText>
        </View>
      </View>
    </View>
  )
}

export default OurCommitment