import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import commonStyles from '../styles/commonStyles';

const GuideScreen = () => {
  const [messages, setMessages] = useState([]);
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
            { role: 'system', content: 'You are a helpful assistant responsible for helping students with debt. Based on location and average monthly income, provide average spending for categories like groceries, travel, and other. Answer debt related questions with analogies with hiking. ' },
            ...messages,
            newMessage,
          ],
        },
        {
          headers: {
            Authorization: `Bearer B`,
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
      <Text style={commonStyles.title}>Trail Guide</Text>
      <ScrollView style={commonStyles.chatContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={commonStyles[msg.role]}>
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
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};


export default GuideScreen;