import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [income, setIncome] = useState('$50,000');
  const [zip, setZip] = useState('12345');
  const [debt, setDebt] = useState('$10,000');

  return (
    <ScrollView style={[commonStyles.container]}>
      <Text style={commonStyles.title}>Profile</Text>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>First Name:</Text>
          <Text style={commonStyles.infoValue}>{firstName}</Text>
        </View>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Last Name:</Text>
          <Text style={commonStyles.infoValue}>{lastName}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Email:</Text>
          <Text style={commonStyles.infoValue}>{email}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Income:</Text>
          <Text style={commonStyles.infoValue}>{income}</Text>
        </View>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>ZIP Code:</Text>
          <Text style={commonStyles.infoValue}>{zip}</Text>
        </View>
      </View>
      <View style={commonStyles.card}>
        <View style={commonStyles.infoRow}>
          <Text style={commonStyles.infoLabel}>Debt Amount:</Text>
          <Text style={commonStyles.infoValue}>{debt}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;