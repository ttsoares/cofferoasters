import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';

import MyText from '../MyText';

interface CardProps {
  title: string;
  body: string;
  onPress?: (event: GestureResponderEvent) => void;
  state: boolean
}

function Card({ title, body, onPress, state }: CardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-[328px] h-[200px] md:w-[223px] md:h-[250px] lg:w-[228px]  rounded-lg shadow-md lg:p-4 lg:m-2
        ${state ? 'bg-c_cyan' : 'bg-gray-200'}
        ${state ? '' : 'hover:bg-c_orange'}
        `
      }
    >
      <MyText className="text-size24 font-bold my-8 px-5  mb-2">{title}</MyText>
      <MyText className="text-size16 font-barlowR text-gray-700 px-5">{body}</MyText>
    </Pressable>
  );
}

export default Card;
