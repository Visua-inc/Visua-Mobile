import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Loading_PermissionProps {
  Permission: () => void;
}

export default function Loading_Permission({ Permission }: Loading_PermissionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const randomTime = Math.random() * (2500 - 1200) + 1200;
    
    setTimeout(() => {
      setIsLoading(false);
    }, randomTime);

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loader,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />

      {isLoading ? (
        <Text style={styles.message}>Loading ou Carregando tanto faz ja me cansei....</Text>
      ) : (
        <>
          <Text style={styles.message}>O Visua Precisa da sua permissão para acessar a câmera</Text>
          <TouchableOpacity style={styles.button} onPress={Permission}>
            <Text style={styles.buttonText}>Conceder Permissão</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171B20',
  },
  loader: {
    width: 120,
    height: 120,
    borderWidth: 10,
    borderRadius: 60,
    borderTopColor: '#1C7396',
    borderRightColor: '#5E6D7D',
    borderLeftColor: '#5E6D7D',
    borderBottomColor: '#5E6D7D',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DFE2E7',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#1C7396',
    backgroundColor: '#1C7396',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#DFE2E7',
  },
});
