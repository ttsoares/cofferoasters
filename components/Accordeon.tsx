import { options } from '@/data/options'; // Adjust path if needed
import React, { useState } from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Pressable,
  Text,
  View,
} from 'react-native';
import Card from './Card';

type CardType = {
  title: string;
  body: string;
};

interface SectionState {
  open: boolean;
  height: number;
  animation: Animated.Value;
}

function AccordionMenu() {
  const [sections, setSections] = useState<SectionState[]>(
    options.map(() => ({
      open: false,
      height: 0,
      animation: new Animated.Value(0),
    }))
  );

  const [choosedOps, setChoosedOps] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

  const toggleSection = (index: number) => {
    setSections((prev) => {
      const updated = [...prev];
      const section = updated[index];

      Animated.timing(section.animation, {
        toValue: section.open ? 0 : section.height,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();

      updated[index] = {
        ...section,
        open: !section.open,
      };

      return updated;
    });
  };

  const handleLayout = (index: number, e: LayoutChangeEvent) => {
    const contentHeight = e.nativeEvent.layout.height;

    setSections((prev) => {
      const updated = [...prev];
      const section = updated[index];

      if (section.height !== contentHeight) {
        updated[index].height = contentHeight;
        if (!section.open) {
          updated[index].animation.setValue(0);
        } else {
          updated[index].animation.setValue(contentHeight);
        }
      }

      return updated;
    });
  };

  const updateOptions = (optionIndex: number, cardIndex: number) => {
    const prev = [...choosedOps];
    if (!prev[optionIndex][cardIndex]) {
      prev[optionIndex].fill(false);
      prev[optionIndex][cardIndex] = true;
    } else {
      prev[optionIndex][cardIndex] = false;
    }
    setChoosedOps(prev);
  };


  return (
    <View className="p-4">
      {options.map((cards, line) => {
        const section = sections[line];

        return (
          <View
            key={line}
            className="mb-2 border border-gray-300 rounded-md overflow-hidden"
          >
            <Pressable
              onPress={() => toggleSection(line)}
              className="flex-row justify-between items-center px-4 py-3 bg-gray-100"
            >
              <Text className="text-base font-semibold">Option {line + 1}</Text>
              <Text className="text-xl font-bold">{section?.open ? 'Y' : 'V'}</Text>
            </Pressable>

            <Animated.View style={{ height: section?.animation, overflow: 'hidden' }}>
              <View
                className="px-2 py-3 flex-row flex-wrap"
                onLayout={(e) => handleLayout(line, e)}
              >
                {cards.map((card: CardType, col) => (
                  <Card
                    key={col}
                    title={card.title}
                    body={card.body}
                    onPress={() => updateOptions(line, col)}
                    state={choosedOps[line][col]}
                  />

                ))}
              </View>
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
}

export default AccordionMenu;
