import React from 'react';
import {Text , View , StyleSheet} from 'react-native';

export default function App() {
return (
  <View style={StyleSheet.container}> 
    <View style={StyleSheet.header}>
      <Text>
        My To-Do App
      </Text>
    </View>
  </View>

 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0066',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
});
