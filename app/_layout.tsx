import { Text,StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded, error] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    inter: Inter_800ExtraBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (

    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({

});
