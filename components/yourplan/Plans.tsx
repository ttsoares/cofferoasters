import React, { useRef, useState } from 'react';
import {
  Animated,
  Easing,
  ImageBackground,
  LayoutChangeEvent,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View
} from 'react-native';
import MyText from '../MyText';

import { heads, options } from '@/data/options';

import MyButton from '../MyButton';
import OptionSection from './OptionSection';

interface SectionState {
  open: boolean;
  height: number;
  animation: Animated.Value;
}
const Plans = () => {

  const { width } = useWindowDimensions();

  const bgOrder =
    width >= 1440
      ? require("@/assets/images/plan/desktop/bg-order-summary.png")
      : width >= 768
        ? require("@/assets/images/plan/tablet/bg-order-summary.png")
        : require("@/assets/images/plan/mobile/bg-order-summary.png");

  // for the accordion
  const [sections, setSections] = useState<SectionState[]>(
    options.map(() => ({
      open: false,
      height: 0,
      animation: new Animated.Value(0),
    }))
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [ready2order, setRaedy2order] = useState(false);

  const [preferences, setPreferences] = useState("");
  const [beanType, setBeanType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grindOp, setGrindOp] = useState("");
  const [deliveries, setDeliveries] = useState("");

  const [total, setTotal] = useState(0);


  const [choosedOps, setChoosedOps] = useState(
    new Array(5).fill(false).map(() => new Array(3).fill(false))
  );

  const toggleSection = (index: number) => {
    setSections((prev) => {
      const updated = [...prev];
      const section = updated[index];

      Animated.timing(section.animation, {
        toValue: section.open ? 0 : section.height,
        duration: 400,
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
    const wasSelected = prev[optionIndex][cardIndex];

    // Clear all options in this group
    prev[optionIndex].fill(false);

    // Toggle the selected option
    prev[optionIndex][cardIndex] = !wasSelected;

    setChoosedOps(prev);

    // Clear the corresponding state if an already selected option is clicked again
    if (wasSelected) {
      switch (optionIndex) {
        case 0: setPreferences(""); break;
        case 1: setBeanType(""); break;
        case 2: setQuantity(""); break;
        case 3: setGrindOp(""); break;
        case 4: setDeliveries(""); break;
      }
    } else {
      // Set the new selection
      switch (optionIndex) {
        case 0: setPreferences(options[optionIndex][cardIndex].title); break;
        case 1: setBeanType(options[optionIndex][cardIndex].title); break;
        case 2: setQuantity(options[optionIndex][cardIndex].title); break;
        case 3: setGrindOp(options[optionIndex][cardIndex].title); break;
        case 4: setDeliveries(options[optionIndex][cardIndex].title); break;
      }
    }
    const OK2order =
      (choosedOps[0][0] || choosedOps[0][1] || choosedOps[0][2]) &&
      (choosedOps[1][0] || choosedOps[1][1] || choosedOps[1][2]) &&
      (choosedOps[2][0] || choosedOps[2][1] || choosedOps[2][2]) &&
      (choosedOps[4][0] || choosedOps[4][1] || choosedOps[4][2]);

    /*
    0 preferences
    1 bean type
    2 quantity
    3 grind option
    4 deliveries
    */

    const preferencesMultiplier = choosedOps[0][0] && options[0][0].how || choosedOps[0][1] && options[0][1].how || choosedOps[0][2] && options[0][2].how;
    const beanTypeMultiplier = choosedOps[1][0] && options[1][0].type || choosedOps[1][1] && options[1][1].type || choosedOps[1][2] && options[1][2].type;
    const quantityMultiplier = choosedOps[2][0] && options[2][0].qtt || choosedOps[2][1] && options[2][1].qtt || choosedOps[2][2] && options[2][2].qtt;
    const grindOptionMultiplier = choosedOps[3][0] && options[3][0].grind || choosedOps[3][1] && options[3][1].grind || choosedOps[3][2] && options[3][2].grind;
    const deliveriesMultiplier = choosedOps[4][0] && options[4][0].freq || choosedOps[4][1] && options[4][1].freq || choosedOps[4][2] && options[4][2].freq;

    const total = preferencesMultiplier * beanTypeMultiplier * quantityMultiplier * grindOptionMultiplier * deliveriesMultiplier;
    setTotal(Number(total.toFixed(2)));

    setRaedy2order(OK2order);
  };

  function closeReset() {
    setChoosedOps([
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]);
    setRaedy2order(false);
    setModalVisible(false);
    setPreferences("");
    setBeanType("");
    setQuantity("");
    setGrindOp("");
    setDeliveries("");
  }

  function openModal() {
    setModalVisible(true);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }

  const scrollRef = useRef<ScrollView>(null);

  return (
    <View className='relative w-full'>
      <View className="w-[85%] md:flex-row mt-[4rem]">
        {/* left */}
        <View className='w-[35%] hidden lg:flex justify-start items-center '>
          <View className='w-60%'>
            <Pressable onPress={() => toggleSection(0)}>
              <MyText className={`md:text-size24 lg:text-size32 font-bold mt-10
                 ${sections[0].open ? 'text-c_cyan' : (choosedOps[0][0] || choosedOps[0][1] || choosedOps[0][2]) ? 'text-c_grey' : 'text-c_greylight'}
                  `}>
                <span className={`${(choosedOps[0][0] || choosedOps[0][1] || choosedOps[0][2]) ? 'text-c_cyan' : 'text-c_greylight'}`}
                >01</span> Preferences
              </MyText>
            </Pressable>
            <View className='w-fulll h-0.5 bg-slate-300 my-6'></View>
            <Pressable onPress={() => toggleSection(1)}>
              <MyText className={`md:text-size24 lg:text-size32 font-bold mt-1
                 ${sections[1].open ? 'text-c_cyan' : (choosedOps[1][0] || choosedOps[1][1] || choosedOps[1][2]) ? 'text-c_grey' : 'text-c_greylight'}
                  `}>
                <span className={`${(choosedOps[1][0] || choosedOps[1][1] || choosedOps[1][2]) ? 'text-c_cyan' : 'text-c_greylight'}`}
                >02</span> Bean Type
              </MyText>
            </Pressable>
            <View className='w-fulll h-0.5 bg-slate-300 my-6'></View>
            <Pressable onPress={() => toggleSection(2)}>
              <MyText className={`md:text-size24 lg:text-size32 font-bold mt-1
                 ${sections[2].open ? 'text-c_cyan' : (choosedOps[2][0] || choosedOps[2][1] || choosedOps[2][2]) ? 'text-c_grey' : 'text-c_greylight'}
                  `}>
                <span className={`${(choosedOps[2][0] || choosedOps[2][1] || choosedOps[2][2]) ? 'text-c_cyan' : 'text-c_greylight'}`}
                >03</span> Quality
              </MyText>
            </Pressable>
            <View className='w-fulll h-0.5 bg-slate-300 my-6'></View>
            <Pressable onPress={() => toggleSection(3)}>
              <MyText className={`md:text-size24 lg:text-size32 font-bold mt-1
                 ${sections[3].open ? 'text-c_cyan' : (choosedOps[3][0] || choosedOps[3][1] || choosedOps[3][2]) ? 'text-c_grey' : 'text-c_greylight'}
                  `}>
                <span className={`${(choosedOps[3][0] || choosedOps[3][1] || choosedOps[3][2]) ? 'text-c_cyan' : 'text-c_greylight'}`}
                >04</span> Grind Options
              </MyText>
            </Pressable>
            <View className='w-fulll h-0.5 bg-slate-300 my-6'></View>
            <Pressable onPress={() => toggleSection(4)}>
              <MyText className={`md:text-size24 lg:text-size32 font-bold mt-1
                 ${sections[4].open ? 'text-c_cyan' : (choosedOps[4][0] || choosedOps[4][4] || choosedOps[4][2]) ? 'text-c_grey' : 'text-c_greylight'}
                  `}>
                <span className={`${(choosedOps[4][0] || choosedOps[4][1] || choosedOps[4][2]) ? 'text-c_cyan' : 'text-c_greylight'}`}
                >05</span> Deliveries
              </MyText>
            </Pressable>
          </View>
        </View>
        {/* right */}
        <View className='w-full lg:w-[65%]'>
          <View className="lg:p-4 ">
            {options.map((cards, index) => (
              <OptionSection
                key={index}
                title={heads[index]}
                sectionIndex={index}
                cards={cards}
                sectionState={sections[index]}
                choosedOps={choosedOps[index]}
                allOptions={choosedOps}
                toggleSection={toggleSection}
                handleLayout={handleLayout}
                updateOptions={updateOptions}
              />
            ))}
          </View>
          <View className='w-full items-center h-fit'>
            <ImageBackground
              source={bgOrder}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', padding: 8, borderRadius: 20, borderWidth: 2, borderColor: '#fff', overflow: 'hidden' }}
            >
              <View className='h-[16rem] md:h-[10rem]  justify-center  rounded-xl m-4'>
                <MyText className='text-c_grey text-left text-size16 font-bold px-8 mb-4'>ORDER SUMMARY</MyText>
                <MyText className='text-white text-size24 px-8'>
                  I drink my coffee using{' '}
                  <MyText className="text-c_cyan">{preferences}</MyText>
                  {', with a '}
                  <MyText className="text-c_cyan">{beanType}</MyText>
                  {' type of bean. '}
                  <MyText className="text-c_cyan">{quantity}</MyText>
                  {','}
                  <MyText className={`${grindOp === "" ? 'hidden' : 'font-bold'}  `}>{` ground ala `}</MyText>
                  <MyText className={`${grindOp === "" ? 'hidden' : 'text-c_cyan font-bold'} `}>{`${grindOp}`}</MyText>
                  {' sent to me '}
                  <MyText className="text-c_cyan">{deliveries}</MyText>
                  .
                </MyText>
              </View>
            </ImageBackground>
          </View>
          <MyButton
            state={`${ready2order ? 'active' : 'inactive'}`}
            onPress={openModal}
            className='mt-6 mr-5 self-center md:self-end' >Create my plan</MyButton>
        </View>
      </View>
      {/* M O D A L */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{ position: 'relative' }}
      >
        {/* overlay */}
        <View className="flex-1 justify-start bg-black/50">
          {/* modal content */}
          <View className="w-[373px] md:max-w-[450px] bg-white rounded-xl mt-24 md:mx-auto absolute bottom-0 left-0 right-0">
            <View className='justify-center items-center bg-c_greyblack px-6 py-4 rounded-t-xl'>
              <MyText className="text-center text-size24 lg:text-size32 font-bold text-white p-3">
                Order Summary
              </MyText>
            </View>
            <MyText className='text-c_grey text-size24 px-8 my-8'>
              I drink my coffee using{' '}
              <MyText className="text-c_cyan">{preferences}</MyText>
              {', with a '}
              <MyText className="text-c_cyan">{beanType}</MyText>
              {' type of bean. '}
              <MyText className="text-c_cyan">{quantity}</MyText>
              {','}
              <MyText className={`${grindOp === "" ? 'hidden' : 'font-bold'}  `}>{` ground ala `}</MyText>
              <MyText className={`${grindOp === "" ? 'hidden' : 'text-c_cyan font-bold'} `}>{`${grindOp}`}</MyText>
              {' sent to me '}
              <MyText className="text-c_cyan">{deliveries}</MyText>
              .
            </MyText>

            <MyText className="text-c_grey font-barlowB text-left text-size16  mb-3 px-6 md:px-12">
              Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
            </MyText>

            <View className="flex-row justify-between items-center mt-4 p-12">
              <MyText className="text-size24 font-bold text-c_greyblack">
                ${total}/mo
              </MyText>
              <Pressable
                onPress={closeReset}
                className="bg-c_cyan px-4 py-2 rounded-lg"
              >
                <MyText className="text-white font-bold">Checkout</MyText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Plans