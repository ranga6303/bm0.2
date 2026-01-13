import { Platform } from 'react-native';

export const shadow = (elevation = 6) => ({
  elevation,

  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.18,
      shadowRadius: elevation * 0.8,
      shadowOffset: { width: 0, height: elevation / 2 },
    },
    android: {},
  }),
});
