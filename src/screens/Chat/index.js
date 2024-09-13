import React, {useState, useCallback, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  Actions,
} from 'react-native-gifted-chat';
import uuid from 'react-native-uuid';
import {Ionicons} from '@expo/vector-icons'; // for icons (replace with react-native-vector-icons if needed)
import * as ImagePicker from 'expo-image-picker'; // for image attachments

export default function ChatScreen({route}) {
  const {room} = route.params;
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMessages([
      {
        _id: uuid.v4(),
        text: `Welcome to ${room.name}`,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'System',
        },
      },
    ]);
  }, [room]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  // Custom bubble style
  const renderBubble = props => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#3b82f6', // Custom color for the user's messages
        },
        left: {
          backgroundColor: '#e5e7eb', // Custom color for other users' messages
        },
      }}
      textStyle={{
        right: {
          color: '#fff', // White text for the user
        },
        left: {
          color: '#000', // Black text for others
        },
      }}
    />
  );

  // Custom toolbar
  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#f3f4f6',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 5,
      }}
    />
  );

  // Custom send button
  const renderSend = props => (
    <Send {...props}>
      <View style={styles.sendButton}>
        <Ionicons name="send" size={24} color="#3b82f6" />
      </View>
    </Send>
  );

  // Typing indicator
  const renderFooter = () => {
    if (isTyping) {
      return (
        <View style={styles.typingIndicator}>
          <Text>User is typing...</Text>
        </View>
      );
    }
    return null;
  };

  // Handle image attachment
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const imageMessage = {
        _id: uuid.v4(),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'User',
        },
        image: result.uri,
      };
      onSend([imageMessage]);
    }
  };

  // Custom actions button for attachments
  const renderActions = props => (
    <Actions
      {...props}
      containerStyle={styles.actionButton}
      icon={() => <Ionicons name="attach" size={24} color="#3b82f6" />}
      onPressActionButton={pickImage}
    />
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 2,
        name: 'User',
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderSend={renderSend}
      renderFooter={renderFooter}
      renderActions={renderActions}
      onInputTextChanged={text => setIsTyping(text.length > 0)}
      alwaysShowSend
      showUserAvatar
      scrollToBottom
    />
  );
}

const styles = StyleSheet.create({
  sendButton: {
    marginRight: 10,
    marginBottom: 5,
  },
  typingIndicator: {
    padding: 5,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 10,
    marginBottom: 5,
  },
});
