import { Stack } from 'expo-router'
import { ViewStyle } from 'react-native'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#172F3B',
          },
          headerTintColor: 'white',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
