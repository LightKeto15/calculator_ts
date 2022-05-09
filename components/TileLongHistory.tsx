import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/MainStyle';

interface Props {
  data: Array<string>;
  onPress: Function;
}

const TileLongHistory: React.FC<Props> = ({data, onPress}: Props) => {
  const onTilePress = () => {
    onPress(data);
  };

  return (
    <View style={{marginBottom: 0}}>
      <TouchableOpacity
        onPress={() => onTilePress()}
        style={styles.listContainer}>
        <Text style={{fontSize: 20}}>{data[0] + ' = ' + data[1]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TileLongHistory;
