import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from './Button';
import { StackNavigationProp } from '@react-navigation/stack';

const Detail: React.FC<{ route: any }> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [didContinue, setDidContinue] = useState(false);
  const handleSubmit = useCallback(() => setDidContinue(true), []);

  const buttonPressed = route?.params?.buttonNum ?? 'unknown';

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        gap: 16,
        justifyContent: 'center',
        padding: 16,
        paddingTop: 64,
      }}
    >
      <Button onPress={() => navigation.popTo('Home')}>Back</Button>

      <Text>Arrived from button {String(buttonPressed)}</Text>
      <Text>Pressed continue? {String(didContinue)}</Text>

      <Button onPress={handleSubmit}>Continue</Button>
    </View>
  );
};

export { Detail };
