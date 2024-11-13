import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profile}>
          <View style={styles.iconWrapper}>
            <Icon name="user" size={24} color="#ffffff" />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Odisseia</Text>
          </View>
        </View>

        {/* Options */}
        <View style={styles.options}>
          <OptionItem icon="file-alt" title="Dados da conta" subtitle="Minhas informações da conta" />
          <OptionItem icon="trash-alt" title="Limpar histórico" subtitle="Limpa seu histórico" />
          <OptionItem icon="times-circle" title="Apagar conta" subtitle="Apagar sua conta do App" />
          <OptionItem icon="sign-out-alt" title="Sair da conta" subtitle="Realizar logout da conta" />
        </View>
      </View>
    </View>
  );
}

const OptionItem = ({ icon, title, subtitle }) => (
  <TouchableOpacity style={styles.optionItem}>
    <Icon name={icon} size={24} color="#ffffff" />
    <View style={styles.optionText}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Text style={styles.optionSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172F3B', 
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  card: {
    backgroundColor: '#1A222A', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    width: 392,
    height: 600,
    marginTop: 185,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    backgroundColor: '#4b5563',
    width: 40,
    paddingLeft: 12,
    padding: 8,
    borderRadius: 50,
  },
  profileText: {
    marginLeft: 12,
  },
  profileName: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  options: {
    borderTopWidth: 1,
    borderTopColor: '#4b5563',
    paddingTop: 16,
    
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 12,
  },
  optionTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  optionSubtitle: {
    color: '#9ca3af', // text-gray-400
    fontSize: 24,
  },
});
