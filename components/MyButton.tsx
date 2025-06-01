import clsx from 'clsx';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import MyText from './MyText';

type ButtonState = 'active' | 'inactive';
type RoutePath = '/' | '/about' | '/yourplan';

interface ButtonProps extends PressableProps {
  state?: ButtonState;
  children: React.ReactNode;
  className?: string;
  route?: string;
}

export default function MyButton({
  state = 'inactive',
  children,
  className,
  route,
  onPress, // Extract onPress from props
  ...props
}: ButtonProps) {
  const router = useRouter();
  const baseClasses = 'py-4 px-11 transition-opacity rounded-lg w-fit';
  const stateBackgroundClass = state === 'active' ? 'bg-c_cyan hover:opacity-50' : 'bg-gray-400 hover:cursor-default';
  const textClasses = 'text-white text-size16';

  const buttonClasses = clsx(baseClasses, stateBackgroundClass, className);

  const handlePress = (e: any) => {
    if (onPress) onPress(e); // Call original onPress if provided
    if (route) router.push(route as RoutePath); // Navigate if route is provided
  };

  return (
    <Pressable
      className={buttonClasses}
      onPress={handlePress}
      {...props}
    >
      <MyText className={textClasses}>{children}</MyText>
    </Pressable>
  );
}
