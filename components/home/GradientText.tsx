import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Text } from 'react-native';
import MyText from '../MyText';

export default function GradientText({ children }: { children: string }) {
  if (Platform.OS === 'web') {
    return (
      <MyText className="text-[50px] md:text-[120px] lg:text-[200px] text-center font-extrabold bg-gradient-to-b from-[#bebeba] to-[#fefefe] text-transparent bg-clip-text mb-8 md:mb-0">
        {children}
      </MyText>
    );
  }

  return (
    <MaskedView
      maskElement={
        <Text style={{ fontSize: 80, fontWeight: 'bold', color: 'black' }}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={['#d4d4d3', '#f6f5f0']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}
