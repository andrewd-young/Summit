// filepath: /Users/jojiaraki/Summit/screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';
import { Button, Input } from 'react-native-elements';

const SettingsScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: 'John Pork', 
    email: 'Johnp@gmail.com', 
  })

  const handleSave = () => { 
    setIsEditing(false);
  };

  // return (
  //   <ScrollView style={commonStyles.container}>
  //   <View style={commonStyles.container}>
  //     <Text style={commonStyles.text}>Settings Screen</Text>
  //   </View>
  //   </ScrollView>
  // );
  return (
    <ScrollView style={commonStyles.container}>
      <View style={commonStyles.text}>
        <Text style={commonStyles.text}>{user.name}</Text>
      </View>

      <View style={commonStyles.container}>
        {isEditing ? (
          <>
            <Input
              label="Name"
              value={user.name}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
            <Input
              label="Email"
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <Input
              label="Bio"
              value={user.bio}
              onChangeText={(text) => setUser({ ...user, bio: text })}
              multiline
            />
            <Button title="Save" onPress={handleSave} />
          </>
        ) : (
          <>
            <Text style={commonStyles.text}>Email</Text>
            <Text style={commonStyles.text}>{user.email}</Text>
            <Text style={commonStyles.text}>Bio</Text>
            <Text style={commonStyles.text}>{user.bio}</Text>
            <Button
              title="Edit Profile"
              onPress={() => setIsEditing(true)}
              containerStyle={commonStyles.editButton}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};



export default SettingsScreen;