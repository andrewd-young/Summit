import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import commonStyles from '../../styles/commonStyles';

const NameScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    if (firstName === '' || lastName === '') {
      Alert.alert('Please enter your first and last name');
      return;
    }
    navigation.navigate('IncomeScreen', { email, firstName, lastName });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Name</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={commonStyles.onboardingInput}
        placeholder="First Name"
        placeholderTextColor="#888"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={commonStyles.onboardingInput}
        placeholder="Last Name"
        placeholderTextColor="#888"
        value={lastName}
        onChangeText={setLastName}
      />
      </View>
      <Button style={styles.nextButton} title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#gray',
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'column',
    gap: 50
  }
})

export default NameScreen;
