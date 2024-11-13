import { Ionicons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Text, View, Button, StyleSheet, Pressable } from "react-native";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <Text style={styles.text}>DESCRITOR DE OBJETO. APONTE A CÂMERA A DOIS PALMOS DO OBJETO E SOARÁ UM BIP QUANDO ELE FOR LIDO.</Text>
      </View>
      {children}
      <View style={styles.buttonContainer}>
      <Pressable>
          <Ionicons name="list" size={72} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="barcode-sharp" size={72} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="camera" size={72} color="white" />
        </Pressable>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  upContainer: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",

    paddingVertical: 40,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    backgroundColor: "#1C7396",
  },
  buttonContainer: {
    width: "100%", // Tornando os botões responsivos

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
    justifyContent: "space-evenly",

    paddingVertical: 30,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    position: "absolute",
    bottom: 0,

    backgroundColor: "#1C7396",
  },
});
