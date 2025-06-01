import { ImageBackground, useWindowDimensions, View } from 'react-native';
import MyButton from '../MyButton';
import MyText from '../MyText';

export default function Hero() {

  const { width } = useWindowDimensions();

  // Define heights for each breakpoint
  const heroHeight =
    width >= 1440 ? 606 :
      width >= 768 ? 500 :
        500;

  const imageSource =
    width >= 1440
      ? require("@/assets/images/home/desktop/image-hero-coffeepress.jpg")
      : width >= 768
        ? require("@/assets/images/home/tablet/image-hero-coffeepress.jpg")
        : require("@/assets/images/home/mobile/image-hero-coffeepress.jpg");

  return (
    <View className="w-[90%]">
      <View
        className="w-full overflow-hidden mt-20 md:mt-0 "
        style={{ height: heroHeight, borderRadius: 16 }}
      >
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={{
            width: '100%', height: '100%'
          }}
          alt='image-coffeepress'
        >
          <View className="
          flex flex-col justify-center items-center mt-28
          md:mt-24 md:ml-10 md:justify-normal md:items-baseline
          lg:mt-28 lg:ml-32">
            <MyText className="text-size40 lg:text-size72 text-white">
              Great coffee{'\n'}made simple.
            </MyText>
            <MyText className="text-center md:text-left text-size12 md:text-size16 text-white mt-6 font-barlowR max-w-[250px] md:max-w-[25rem]">
              Start your mornings with the world&rsquo;s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
            </MyText>
            <MyButton route="/yourplan" className="mt-10" state="active">
              Create your plan
            </MyButton>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}