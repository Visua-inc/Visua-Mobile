import { Text, View } from "react-native";
import Reproducao from "../app/textoereproducao";
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Reproducao />
    </View>
  )
}
