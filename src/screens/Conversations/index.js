import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import uuid from 'react-native-uuid';

export default function ConversationScreen({navigation}) {
  const [rooms, setRooms] = useState([]);

  const createChatRoom = () => {
    const newRoom = {
      id: uuid.v4(),
      name: `Room ${rooms.length + 1}`,
    };
    setRooms([...rooms, newRoom]);
  };

  return (
    <View style={styles.container}>
      <Button title="Create New Chat Room" onPress={createChatRoom} />
      <FlatList
        data={rooms}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat', {room: item})}>
            <View style={styles.roomItem}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  roomItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
