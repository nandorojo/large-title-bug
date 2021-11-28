import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

function Home() {
  return (
    <ScrollView>
      {new Array(40).fill(0).map((_, i) => (
        <View key={i} style={[styles.item, i % 2 && styles.odd]} />
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            headerLargeTitle: true,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    backgroundColor: "#41b87a",
  },
  odd: {
    backgroundColor: "#333333",
  },
});
