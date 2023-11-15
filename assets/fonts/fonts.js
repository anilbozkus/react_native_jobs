
import { Font } from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'DMBold': require('./DMSans-Bold.ttf'),
    'DMMedium': require('./DMSans-Medium.ttf'),
    'DMRegular': require('./DMSans-Regular.ttf'),
  });
};
