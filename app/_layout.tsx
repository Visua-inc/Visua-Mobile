import { Stack } from 'expo-router'
import React from 'react'
import { ViewStyle } from 'react-native'

export default function RootLayout() {
  return (
    <Stack>
       <Stack.Screen
        name='index'
        // options={{
        //   headerTitle: '',
        //   headerStyle: {
        //     backgroundColor: '#1c7396',
        //   },
        //   headerTintColor: 'white',
        //   headerShadowVisible: false,
        // }}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#1c7396',
          },
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerShown: false
        }}
      />
    </Stack>
  )
}
