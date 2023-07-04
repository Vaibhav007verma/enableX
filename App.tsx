import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Enx} from "enx-rtc-react-native";

 const initiate = () => {
  Enx.initRoom();
  console.log("Hello")
}

const disconnect = () => {
  Enx.disconnect();
}


const App = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => initiate()}>
        <Text>Initiate a Call</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => disconnect()}>
        <Text>Disconnect </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
