import { View } from 'react-native';

import MyButton from '../MyButton';
import MyText from '../MyText';

export default function HowItWorks() {
  return (
    <View className="mt-[52rem] md:mt-[35rem] lg:mt-[17rem] lg:px-36 mx-auto">
      {/* Section Title */}
      <MyText className="ml-12 text-size24 font-bold text-c_grey mb-10 lg:ml-0">
        How it works
      </MyText>

      {/* Timeline Row */}
      <View className="relative flex-col md:flex-row gap-6 ml-12 lg:ml-0 lg:items-start">
        {/* Horizontal Line behind circles */}
        <View className="hidden md:block absolute top-3 left-6 right-[31%] h-[2px] bg-orange-200 z-[-1]" />

        {/* Step 01 */}
        <View className="flex-1 items-start space-y-8">
          <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan bg-white mb-6" />
          <MyText className="text-size72 font-black text-c_orange">01</MyText>
          <MyText className="text-size32 font-bold text-gray-800 mt-2 mb-2 text-left">
            Pick your coffee
          </MyText>
          <MyText className="text-size16 font-barlowR text-c_greyblack text-left pr-10 lg:pr-20">
            Select from our evolving range of artisan coffees. Our beans are ethically
            sourced and we pay fair prices for them. There are new coffees in all
            profiles every month for you to try out.
          </MyText>
        </View>

        {/* Step 02 */}
        <View className="flex-1 items-start space-y-8">
          <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan bg-white mb-6" />
          <MyText className="text-size72 font-black text-c_orange">02</MyText>
          <MyText className="text-size32 font-bold text-gray-800 mt-2 mb-2 text-left">
            Choose the frequency
          </MyText>
          <MyText className="text-size16 font-barlowR text-c_greyblack text-left pr-10 lg:pr-20">
            Customize your order frequency, quantity, even your roast style and grind
            type. Pause, skip or cancel your subscription with no commitment through
            our online portal.
          </MyText>
        </View>

        {/* Step 03 */}
        <View className="flex-1 items-start space-y-8">
          <View className="hidden md:block w-6 h-6 rounded-full border-2 border-c_cyan bg-white mb-6" />
          <MyText className="text-size72 font-black text-c_orange">03</MyText>
          <MyText className="text-size32 font-bold text-gray-800 mt-2 mb-2 text-left">
            Receive and enjoy!
          </MyText>
          <MyText className="text-size16 font-barlowR text-c_greyblack text-left pr-10 lg:pr-20">
            We ship your package within 48 hours, freshly roasted. Sit back and enjoy
            award-winning world-class coffees curated to provide a distinct tasting
            experience.
          </MyText>
        </View>
      </View>
      <MyButton className="mt-20 ml-12 lg:ml-0" state="active" route="/yourplan">Create your plan</MyButton>
    </View>
  );
}
