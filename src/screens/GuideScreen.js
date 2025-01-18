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
            { role: 'system', content: 'You are a helpful assistant.' },
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
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles[msg.role]}>
            {msg.content}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  assistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default GuideScreen;