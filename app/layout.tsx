import Layout from '@/components/layout'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export default function LayoutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Layout
        upperContent='DESCRITOR DE OBJETO. APONTE A CÂMERA A DOIS PALMOS DO OBJETO E SOARÁ UM BIP QUANDO ELE FOR LIDO.'
        lowerContent={
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            <Pressable>
              <Ionicons name='list' size={65} color='white' />
            </Pressable>
            <Pressable>
              <Ionicons name='barcode-sharp' size={65} color='white' />
            </Pressable>
            <Pressable>
              <Ionicons name='camera' size={65} color='white' />
            </Pressable>
          </View>
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>blahblahblah</Text>
        </View>
      </Layout>
    </View>
  )
}
