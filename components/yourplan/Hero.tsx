import { ImageBackground, useWindowDimensions, View } from 'react-native';
import MyText from '../MyText';

const Hero = () => {
  const { width } = useWindowDimensions();

  // Define heights for each breakpoint
  const heroHeight =
    width >= 1440 ? 606 :
      width >= 768 ? 500 :
        500;

  const imageSource =
    width >= 1440
      ? require("@/assets/images/plan/desktop/image-hero-blackcup.jpg")
      : width >= 768
        ? require("@/assets/images/plan/tablet/image-hero-blackcup.jpg")
        : require("@/assets/images/plan/mobile/image-hero-blackcup.jpg");
  return (
    <View
      className="w-[90%] overflow-hidden mt-10 md:mt-0"
      style={{ height: heroHeight, borderRadius: 16 }}
    >
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={{
          width: '100%', height: '100%', borderRadius: 20, borderWidth: 2, borderColor: '#fff', overflow: 'hidden',
        }}
      >
        <View className='ml-8 md:ml-10 justify-start w-[70%] md:max-w-[65%] text-center md:text-left  my-auto'>
          <MyText className="text-size24 md:text-size40 lg:text-size72 font-black text-white text-center md:text-left">
            Create plan</MyText>
          <MyText className="text-size16 md:text-size18 font-barlowR text-white text-left mt-10 md:w-[90%] lg:max-w-[80%]">
            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
          </MyText>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Hero