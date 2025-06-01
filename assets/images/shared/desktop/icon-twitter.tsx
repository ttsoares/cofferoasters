import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';


const IconTwitter = ({ className = '' }: { className?: string }) => (
  <View className={className}>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
      <Path
        fill="currentColor"
        d="M24 2.557a9.8 9.8 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337.608a9.9 9.9 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.98 13.98 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.9 4.9 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10 10 0 0 0 24 2.557"
      />
    </Svg>
  </View>
);
export default IconTwitter;
