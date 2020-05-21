import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler'
import MainContainer from './components/MainContainer';

export default function App() {
  return (
      <SafeAreaView>
          <View style={styles.container}>
              <MainContainer/>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip',
  }
});
