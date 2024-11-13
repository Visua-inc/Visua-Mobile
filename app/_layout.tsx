import { Stack } from 'expo-router'
import { ViewStyle } from 'react-native'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='layout'
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#1c7396',
          },
          headerTintColor: 'white',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
