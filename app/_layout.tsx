import { Text,StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (

    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({

});