import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
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
  const [selectedChatFaceData, setSelectedChatFaceData] = useState<ChatFaceDataProps>({ id: 0, name: '', image: '', primary: '' });;

  useEffect(() => {
    setChatFaceData(ChatFaceData);
    setSelectedChatFaceData(chatFaceData[0])

  }, [])

  const onChatFacePress = (id: number) => {
    setSelectedChatFaceData(chatFaceData[id])
  }


  return (
    <View style={{ alignItems: 'center', paddingTop: 90 }}>
      <Text style={{ color: selectedChatFaceData.primary, fontSize: 30 }}>Olá</Text>
      <Text style={{ color: selectedChatFaceData.primary, fontSize: 30, fontWeight: "bold" }}>Eu sou {selectedChatFaceData.name}</Text>

      <Image source={{ uri: selectedChatFaceData.image }} style={{ width: 150, height: 150, marginTop: 20 }} />
      <Text style={{ marginTop: 30, fontSize: 25 }}>Como posso ajudá lo?</Text>

      <View style={{ marginTop: 20, backgroundColor: '#F5F5F5', alignItems: 'center', height: 110, padding: 0, borderRadius: 10 }} >
        <FlatList
          data={chatFaceData}
          horizontal={true}
          renderItem={({ item }) => {
            if (selectedChatFaceData.id != item.id) {
              return (
                <View style={{ margin: 15 }}>
                  <TouchableOpacity onPress={() => onChatFacePress(item.id)}>
                    <Image source={{ uri: item.image }}
                      style={{ width: 40, height: 40 }} />
                  </TouchableOpacity>
                </View >
              )
            }
            return null
          }
          }
        />
        <Text style={{ marginTop: 5, fontSize: 17, color: '#b0b0b0' }}>Escolha seu amigo de bate-papo favorito </Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: selectedChatFaceData.primary, padding: 17, width: Dimensions.get('screen').width * 0.6, borderRadius: 100, alignItems: 'center',marginTop:40 }}>
        <Text style={{ fontSize: 16, color: '#fff' }}>Vamos conversar</Text>
      </TouchableOpacity>
    </View >
  )
}