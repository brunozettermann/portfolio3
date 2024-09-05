import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  StyleSheet 
} from 'react-native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const registerUser = async () => {
    if (!username || !userEmail || !userPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const userData = { name: username, email: userEmail, password: userPassword };

    try {
      const result = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (result.ok) {
        Alert.alert('Sucesso', 'Você foi cadastrado com sucesso!');
      } else {
        Alert.alert('Erro', 'Erro ao tentar cadastrar. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão. Verifique sua internet.');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Criar Conta</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Nome Completo"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="E-mail"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Senha"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={registerUser}
      >
        <Text style={styles.submitButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    paddingTop: 40, 
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center',
    color: '#333',
  },
  inputBox: {
    height: 40,  
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 10, 
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    height: 40,  
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16, 
  },
});

export default SignupScreen;