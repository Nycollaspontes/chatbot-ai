import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatFaceData from '../Services/ChatFaceData';

interface ChatFaceDataProps {
  id: number;
  name: string;
  image: string;
  primary: string;
}

export default function HomeScreen() {
  const [chatFaceData, setChatFaceData] = useState<ChatFaceDataProps[]>(ChatFaceData);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState<ChatFaceDataProps>();
  useEffect(() => {

    setChatFaceData(ChatFaceData);
    setSelectedChatFaceData(chatFaceData[0])

  }, [])
  return (
    <View>
      <Text>Hello</Text>
      <Text>{selectedChatFaceData.name}</Text>
    </View>
  )
}