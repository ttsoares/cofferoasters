import MyText from '@/components/MyText';
import { ImageBackground, useWindowDimensions, View } from 'react-native';

export default function HowItWorks() {

  const { width } = useWindowDimensions();

  const bgSteps =
    width >= 1440
      ? require("@/assets/images/plan/desktop/bg-steps.png")
      : width >= 768
        ? require("@/assets/images/plan/tablet/bg-steps.png")
        : require("@/assets/images/plan/mobile/bg-steps.png");

  return (
    <View className="w-[90%] mt-[5rem] md:mt-[8rem] lg:mt-[8rem] rounded-lg">
      <ImageBackground
        source={bgSteps}
        resizeMode="cover"
        style={{
          width: '100%', height: '100%', borderRadius: 14, borderWidth: 2, borderColor: '#fff', overflow: 'hidden',
        }}
        alt="Gray background"
      >
        <View className="relative flex-col gap-6 md:flex-row md:mx-5 md:my-10 lg:items-start lg:mx-20 lg:my-28">

          {/* Horizontal Line behind circles */}
          <View className="hidden md:block absolute top-3 left-3.5 md:right-[29.5%] lg:right-[31%] h-[2px] bg-orange-200 z-[-1]" />
          {/* Step 01 */}
          <View className="flex-1 items-center md:items-start space-y-8">
            <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan mb-6" />
            <MyText className="text-size72 font-black text-c_orange">01</MyText>
            <MyText className="text-size24 md:text-size32 font-bold text-white mt-2 mb-2 text-left">
              Pick your coffee
            </MyText>
            <MyText className="text-size16 font-barlowR text-white text-center  md:text-left md:pr-10 lg:pr-20">
              Select from our evolving range of artisan coffees. Our beans are ethically
              sourced and we pay fair prices for them. There are new coffees in all
              profiles every month for you to try out.
            </MyText>
          </View>

          {/* Step 02 */}
          <View className="flex-1 items-center md:items-start space-y-8">
            <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan mb-6" />
            <MyText className="text-size72 font-black text-c_orange">02</MyText>
            <MyText className="text-size24 md:text-size32 font-bold text-white mt-2 mb-2 text-left">
              Choose the frequency
            </MyText>
            <MyText className="text-size16 font-barlowR text-white text-center  md:text-left md:pr-10 lg:pr-20">
              Customize your order frequency, quantity, even your roast style and grind
              type. Pause, skip or cancel your subscription with no commitment through
              our online portal.
            </MyText>
          </View>

          {/* Step 03 */}
          <View className="flex-1 items-center md:items-start space-y-8">
            <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan mb-6" />
            <MyText className="text-size72 font-black text-c_orange">03</MyText>
            <MyText className="text-size24 md:text-size32 font-bold text-white mt-2 mb-2 text-left">
              Receive and enjoy!
            </MyText>
            <MyText className="text-size16 font-barlowR text-white text-center  md:text-left md:pr-10 lg:pr-20">
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy
              award-winning world-class coffees curated to provide a distinct tasting
              experience.
            </MyText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
