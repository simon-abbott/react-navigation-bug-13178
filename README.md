# Example of react navigation bug 13178

This is a minimal example for https://github.com/react-navigation/react-navigation/issues/13178

## Steps to reproduce:

1. Install the project (`yarn install`)
2. Run iOS (`yarn ios`)
3. Tap on any of the buttons
4. Try to go back

## Key pieces

I have found that changing the following items causes the reproduction to no longer happen:

- Removing `animation: 'none'` from the `Detail` screen in `AppNavigator`
- Swapping the button from `react-native-gesture-handler`'s `TouchableOpacity` to either the native `TouchableOpacity` or `react-native-gesture-handler`'s `Touchable` (this fixed the reproduction, but did _not_ fully fix this issue in the wild)
