import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { HomeScreenProps } from '../types/screens';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <WebView source={{ uri: 'https://toss-webview.netlify.app/' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(243, 244, 246)',
  },
});

export default HomeScreen;
