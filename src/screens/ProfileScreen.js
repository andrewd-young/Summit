import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { UserContext, useUserData } from '../context/UserProvider';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [income, setIncome] = useState('$50,000');
  const [zip, setZip] = useState('12345');
  const [debt, setDebt] = useState('$10,000');

  const { user } = useUserData();

  if (!user) {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={[commonStyles.container]}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
        <Text style={commonStyles.title}>Profile</Text>
        <FontAwesomeIcon icon={faUser} size={32} color="white" style={{ marginLeft: 10 }} />
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>First Name:</Text>
          <Text style={commonStyles.infoValue}>{user.firstName || ""}</Text>
        </View>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Last Name:</Text>
          <Text style={commonStyles.infoValue}>{user.lastName || ""}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Email:</Text>
          <Text style={commonStyles.infoValue}>{user.email || ""}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Income:</Text>
          <Text style={commonStyles.infoValue}>${user.income || ""}</Text>
        </View>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>ZIP Code:</Text>
          <Text style={commonStyles.infoValue}>{user.location || ""}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Debt Amount:</Text>
          <Text style={commonStyles.infoValue}>${user.debt || -1}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;