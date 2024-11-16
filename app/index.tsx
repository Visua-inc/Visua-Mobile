import Layout from '@/components/layout'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Layout audio='@/assets/images/audioPlaceholder.png'>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </Layout>
    </View>
  )
}
