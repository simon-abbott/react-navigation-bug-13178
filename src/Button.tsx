import React from 'react';
import { Text, View } from 'react-native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';

const Button: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#1A1A1A',
          borderRadius: 6,
          height: 54,
          justifyContent: 'center',
        }}
        {...props}
      >
        <Text style={{ color: '#FFFFFF' }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
