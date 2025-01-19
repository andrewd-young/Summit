import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import commonStyles from '../../styles/commonStyles';
import { useUserData } from '../../context/UserProvider';

const EmailScreen = ({ navigation }) => {
  const { userExists } = useUserData();
  const [email, setEmail] = useState('');
  const validEmailEnd = [
    'gmail.com',
    'northeastern.edu',
  ]

  const handleNext = async() => {
    // Add validation if needed
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const splitEmail = email.split("@");
    if(!validEmailEnd.includes(splitEmail[1])) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const doesUserExist = await userExists(email.toLowerCase());
    console.log(doesUserExist)
    if (!doesUserExist) {
      navigation.navigate('NameScreen', { email });
    } else {
      navigation.replace("Main");
    }
  };

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <View style={[commonStyles.container]}>
      <View style={{justifyContent: "center", alignContent: "center", marginTop: "5%"}}>
        <Text style={[commonStyles.title, {textAlign: "center"}]}>Enter Your Email</Text>

      </View>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <TextInput
          style={{borderRadius: 5, borderWidth: 1, borderColor: "#888", padding: 10, width: "80%", color: "white"}}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default EmailScreen;
