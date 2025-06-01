import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';

import IconFacebook from '@/assets/images/shared/desktop/icon-facebook';
import IconInstagram from '@/assets/images/shared/desktop/icon-instagram';
import IconTwitter from '@/assets/images/shared/desktop/icon-twitter';
import Logo from '@/assets/images/shared/desktop/logo';

import MyText from '@/components/MyText';

import { menu, RoutePath } from '@/data/menuItems';

const NAV_ITEMS: { label: string; route: RoutePath }[] = menu.map((item) => ({
  label: item.title,
  route: item.href as RoutePath
}));

const Footer = () => {

  const router = useRouter();

  return (
    <View className='w-full px-5 md:px-10 mt-[8rem] lg:px-20'>
      <View className='h-[18rem] lg:h-[7rem] w-full px-20 bg-c_greyblack items-center lg:flex-row justify-center space-y-9 lg:space-y-0'>
        <View className='lg:flex-row justify-between items-center lg:w-[50%] w-full space-y-9 lg:space-y-0'>
          <Logo pathFill="#FFFFFF" />
          <View className='flex flex-row justify-center'>
            {NAV_ITEMS.map((item) => (
              <Pressable
                key={item.route}
                onPress={() => router.push(item.route as RoutePath)}
                className="flex justify-center mx-3"
              >
                <MyText className="text-c_grey hover:text-white text-size12">
                  {item.label}
                </MyText>
              </Pressable>
            ))}
          </View>
        </View>
        <View className='w-1/2 items-center  lg:items-end'>
          <View className='flex-row justify-between items-center w-32'>
            <IconFacebook className="text-white hover:text-c_orange" />
            <IconTwitter className="text-white hover:text-c_orange" />
            <IconInstagram className="text-white hover:text-c_orange" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Footer