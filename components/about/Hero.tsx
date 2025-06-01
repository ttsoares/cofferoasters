import MyText from '@/components/MyText';
import { ImageBackground, useWindowDimensions, View } from 'react-native';

const Hero = () => {

  const { width } = useWindowDimensions();

  // Define heights for each breakpoint
  const heroHeight =
    width >= 1440 ? 450 :
      width >= 768 ? 500 :
        500;

  const imageSource =
    width >= 1440
      ? require("@/assets/images/about/desktop/image-hero-whitecup.jpg")
      : width >= 768
        ? require("@/assets/images/about/tablet/image-hero-whitecup.jpg")
        : require("@/assets/images/about/mobile/image-hero-whitecup.jpg");

  return (
    <View
      className="w-[90%] overflow-hidden mt-20 md:mt-0"
      style={{ height: heroHeight, borderRadius: 16 }}
    >
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={{
          width: '100%', height: '100%', borderRadius: 20, borderWidth: 2, borderColor: '#fff', overflow: 'hidden',
        }}
        alt="white cup of coffee"
      >
        <View className='ml-8 md:ml-20 justify-start w-[70%] md:max-w-[45%] text-center md:text-left  my-auto'>
          <MyText className="text-size24 md:text-size40 font-black text-white text-center md:text-left">About Us</MyText>
          <MyText className="text-size16 md:text-size18 max-w-[80%] font-barlowR text-white text-left mt-10">Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</MyText>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Hero