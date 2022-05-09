import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  onPress: Function;
}

const TileNumber: React.FC<Props> = ({text, onPress}: Props) => {
  const onTilePress = () => {
    onPress(text);
  };
  const getBGColor = () => {
    if (text === 'C' || text === '=') {
      return '#07a316';
    } else if (!isNaN(parseInt(text))) {
      return '#242424';
    } else {
      return '#006a94';
    }
  };
  return (
    <TouchableOpacity
      onPress={() => onTilePress()}
      style={[styles.button, {backgroundColor: getBGColor()}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    borderColor: '#a4a5a6',
    borderWidth: 1,
    justifyContent: 'center',
    width: '25%',
  },
  text: {
    color: '#ffff',
    fontSize: 28,
  },
});
export default TileNumber;
