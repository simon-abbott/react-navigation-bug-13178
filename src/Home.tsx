import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Button } from './Button';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        gap: 8,
        justifyContent: 'center',
        padding: 16,
        paddingTop: 64,
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Button
          key={index}
          onPress={() =>
            navigation.navigate('Detail', { buttonNum: index + 1 })
          }
        >
          Button {index + 1}
        </Button>
      ))}
    </View>
  );
};

export { HomeScreen };
