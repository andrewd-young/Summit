import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';
import commonStyles from '../styles/commonStyles';
import { useUserData } from '../context/UserProvider';
const GuideScreen = () => {

  const {user} = useUserData();

  
  const [messages, setMessages] = useState([
    { role: 'system', content: `Welcome! Hello, ${user.firstName}. My name is Wes and I will be your guide throughout your debt journey. How can I assist you with your debt-related questions today?` }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { role: 'user', content: input };
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: `You are a helpful assistant named Wes responsible for helping students with debt. Based on location and average monthly income, provide average spending for categories like groceries, travel, and other. Answer debt related questions with analogies with hiking. For this particular person you are helping, their name is ${user.firstName}, their location is ${user.location}, their debt amount is ${user.debt}, and income per month is ${user.income}.  ` },
            ...messages,
            newMessage,
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = response.data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Trail Guide 🧗</Text>
      <ScrollView style={commonStyles.chatContainer}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={[
              commonStyles[msg.role],
              index === 0 && commonStyles.firstMessage // Apply firstMessage style to the first message
            ]}
          >
            {msg.content}
          </Text>
        ))}
      </ScrollView>
      <View style={commonStyles.inputContainer}>
        <TextInput
          style={commonStyles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          placeholderTextColor="#888" // Optional: Set placeholder text color
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default GuideScreen;