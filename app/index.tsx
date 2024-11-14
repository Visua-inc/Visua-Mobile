import { Text, View } from "react-native";
import Configuracoes from "./configuracoes";
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
      <Configuracoes/>
    </View>
  )
}