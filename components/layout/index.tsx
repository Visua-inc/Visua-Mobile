import React, { ReactNode } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Texto</Text>
      </View>
      {children}
      <View style={styles.buttonContainer}>
        <Button title="Botão 1" onPress={() => {}} />
        <Button title="Botão 2" onPress={() => {}} />
        <Button title="Botão 3" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20, // Adicionando um pouco de espaço para o layout
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%", // Tornando os botões responsivos

    display: "flex",
    flexDirection: "row",

    padding: ""

    alignItems: "center",
    gap: 60,

    backgroundColor: "#1C7396",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  },
});
