import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, useWindowDimensions, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Logo from '@/assets/images/shared/desktop/logo';
import MyText from './MyText';

import { menu, RoutePath } from '@/data/menuItems';

const NAV_ITEMS: { label: string; route: RoutePath }[] = menu.map((item) => ({
  label: item.title,
  route: item.href as RoutePath
}));

export default function Navigation() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const isMobile = width < 768;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(drawerAnim, {
      toValue: drawerOpen ? 0 : width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [drawerOpen, width, drawerAnim]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerOpacity = drawerAnim.interpolate({
    inputRange: [-30, 2],
    outputRange: [0, 1],   // fades in as it slides in
    extrapolate: 'clamp',
  });

  if (isMobile) {
    return (
      <>
        <View className='w-full h-[100px] flex flex-row justify-between items-center relative  px-3'>
          <Logo className='z-50' />
          {/* Open button */}
          {!drawerOpen && <Pressable
            className='p-2  z-50 '
            onPress={toggleDrawer}>
            <Ionicons name="menu" size={28} color="black" />
          </Pressable>}
          {/* Close button */}
          {drawerOpen && <Pressable
            className='p-2 z-50'
            onPress={toggleDrawer}>
            <Ionicons name="close" size={28} color="black" />
          </Pressable>}
        </View>
        <View className="absolute top-[180px] w-[91%] right-4 z-50 flex-row justify-start items-start p-4 h-[500px] "
        >
          {/* Overlay backdrop */}
          {drawerOpen && (
            <LinearGradient
              className="absolute"
              colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
              style={{ width: 395, height: 550, left: -20, top: -20 }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />

          )}
          <Animated.View
            style={{
              backgroundColor: 'white',
              left: -20,
              transform: [{ translateX: drawerAnim }],
              marginTop: -20,
              width: 360,
              height: 200,
              opacity: drawerOpacity,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Pressable
                key={item.route}
                className="py-3 px-3 items-center justify-start"
                onPress={() => {
                  setDrawerOpen(false);
                  router.push(item.route as RoutePath);
                }}
              >
                <MyText className="text-size4 text-c_greyblack">{item.label}</MyText>
              </Pressable>
            ))}
          </Animated.View>
        </View>
      </>
    );
  }

  // Desktop  & tablet layout
  return (
    <View className="h-[90px] w-[90%] mx-auto flex-row flex  items-center justify-between">
      <View className='place-content-center'>
        <Logo />
      </View>
      <View className='flex flex-row justify-center'>
        {NAV_ITEMS.map((item) => (
          <Pressable
            key={item.route}
            onPress={() => router.push(item.route as RoutePath)}
            className="flex justify-center mx-3"
          >
            <MyText className="text-c_grey hover:text-c_greyblack text-size12">
              {item.label}
            </MyText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
