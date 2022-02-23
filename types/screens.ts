import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;
