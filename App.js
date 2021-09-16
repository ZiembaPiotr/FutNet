import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from "./Root"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
