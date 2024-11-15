import { Text, StyleSheet, View,TouchableHighlight,GestureResponderEvent, ViewStyle  } from 'react-native';



export default function App() {

  const handleCancelPress = (event: GestureResponderEvent) => {
    console.log('Botão Cancelar pressionado!');
  };
  
  const handleExitPress = (event: GestureResponderEvent) => {
    console.log('Botão Sair pressionado!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.quadradodentro}>
        <View style={styles.quadrado}>
        <Text style={styles.texto1}>Confirmação</Text>
          <Text style={styles.texto1}>Deseja realmente</Text>
          <Text style={styles.texto2}>Limpar os dados do histórico?</Text>
          <Text style={styles.texto3}>Eles não poderão</Text>
          <Text style={styles.texto4}>Ser recuperados</Text>
          <>
      <TouchableHighlight style={styles.Limpar} onPress={handleCancelPress}>
        <Text style={{ color: '#ECEFF4', fontSize: 18 }}>Limpar</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.sair} onPress={handleExitPress}>
        <Text style={{ color: '#ECEFF4', fontSize: 18 }}>Cancelar</Text>
      </TouchableHighlight>
    </>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',  
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  quadradodentro: {
    flex: 1,
    backgroundColor: 'transparent',  
    marginTop: '50%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    alignItems: 'center',
  },

  quadrado: {
    backgroundColor: '#171B20',  
    width: '88%',
    borderRadius: 45,
    height: '65%',
    alignItems: 'center',
    
    
  },

  texto1: {
    fontSize: 20,
    color: '#ECEFF4',
    marginTop:'5%'
  },

  texto2: {
    fontSize: 20,
    color: '#ECEFF4',
    paddingTop: '5%',
  },

  texto3: {
    fontSize: 20,
    color: '#ECEFF4',
    paddingTop: '1%',
  },

  texto4: {
    fontSize: 20,
    color: '#ECEFF4',
    paddingTop: '1%',
  },

  Limpar: {
    borderWidth: 2,
    backgroundColor:'#1C7396',
    borderRadius: 45,
    padding: '1%',
    alignItems: 'center',
    marginTop: '10%',
    width: '44%',
    justifyContent: 'center',
  } as ViewStyle,

  sair: {
    borderWidth: 2,
    borderColor: '#1C7396',
    borderRadius: 45,
    padding: '1%',
    alignItems: 'center',
    marginTop: '10%',
    width: '44%',
    justifyContent: 'center',
  } as ViewStyle,

});