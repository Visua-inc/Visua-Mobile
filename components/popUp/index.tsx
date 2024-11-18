import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
  contentText1?: string
  contentText2?: string
  buttonText?: string
  isVisible: boolean
  onOpen: () => void
  onClose: () => void
}

export default function PopUp({
  contentText1,
  contentText2,
  buttonText,
  isVisible,
  onOpen,
  onClose,
}: ButtonProps) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType='none'
      onRequestClose={onClose}
    >
      <View style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Confirmação</Text>
          <Text style={styles.content}>
            {contentText1}
            {contentText2 ? '\n' : ''}
            {contentText2}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.bText}>{buttonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, styles.button2]}>
              <Text style={styles.bText} onPress={onClose}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',

    position: 'absolute',

    zIndex: 5,
    backgroundColor: 'rgba(23, 27, 32, 0.8)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',

    padding: '3%',
    borderRadius: 45,

    minHeight: '56%',
    width: '85%',

    gap: '5%',

    backgroundColor: '#171B20',
  },
  title: {
    color: '#ECEFF4',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    color: '#ECEFF4',
    fontSize: 22,
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'flex-end',

    gap: '12%',
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,

    width: 190,
    height: 50,

    backgroundColor: '#1C7396',
  },
  button2: {
    backgroundColor: '#171B20',
    borderWidth: 3,
    borderColor: '#1C7396',
  },
  bText: {
    flex: 1,

    color: '#ECEFF4',

    fontSize: 26,
    fontWeight: 'bold',

    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
