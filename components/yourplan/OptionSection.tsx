import IconArrow from '@/assets/images/plan/desktop/icon-arrow';
import React from 'react';
import { Animated, Pressable, View } from 'react-native';
import MyText from '../MyText';
import Card from './Card';

type CardType = {
  title: string;
  body: string;
};

interface OptionSectionProps {
  title: string;
  sectionIndex: number;
  cards: CardType[];
  sectionState: {
    animation: Animated.Value;
    open: boolean;
  };
  choosedOps: boolean[];
  toggleSection: (index: number) => void;
  handleLayout: (index: number, e: any) => void;
  updateOptions: (optionIndex: number, cardIndex: number) => void;
}

const OptionSection = ({
  title,
  sectionIndex,
  cards,
  sectionState,
  choosedOps,
  toggleSection,
  handleLayout,
  updateOptions,
}: OptionSectionProps) => {
  return (
    <View className="mb-2 border border-c_lcream rounded-md overflow-hidden hover:border-c_greylight">
      <Pressable
        onPress={() => toggleSection(sectionIndex)}
        className="flex-row justify-between items-center md:px-4 py-3 bg-c_lcream"
      >
        <MyText className="font-black text-size24 lg:text-size40 text-c_grey">{title}</MyText>
        <IconArrow state={sectionState.open} />
      </Pressable>

      <Animated.View
        style={{
          height: sectionState.animation,
          opacity: sectionState.animation.interpolate({
            inputRange: [0, 250],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
          overflow: 'hidden',
        }}
      >
        <View
          className="px-2 py-3 md:flex-row flex-wrap justify-around"
          onLayout={(e) => handleLayout(sectionIndex, e)}
        >
          {cards.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              title={card.title}
              body={card.body}
              onPress={() => updateOptions(sectionIndex, cardIndex)}
              state={choosedOps[cardIndex]}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default OptionSection;
