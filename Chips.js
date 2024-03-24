import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { ChipsContext } from './ChipsContext';

export default function Chips() {
  const [chips, setChips] = useContext(ChipsContext);

  const handlePress = (chip) => {
    if (chip === 'Other +') {
      Alert.prompt(
        'Enter chip name',
        '',
        [
          { text: 'Cancel' },
          { text: 'OK', onPress: (name) => setChips([...chips.slice(0, -1), `X ${name}`, 'Other +']) },
        ],
        'plain-text',
      );
    } else {
      setChips(chips.filter((c) => c !== chip));
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap', marginVertical: 10, marginHorizontal: 20 }}>
      {chips.map((chip, index) => (
        <TouchableOpacity key={index} style={{ padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 20, marginHorizontal: 10, marginVertical: 5, backgroundColor: chip === 'Other +' ? 'white' : '#FB6A09' }} onPress={() => handlePress(chip)}>
          <Text>{chip}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
