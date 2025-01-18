import React from 'react';
import { View, Text, Button } from 'react-native';
import commonStyles from '../styles/commonStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;