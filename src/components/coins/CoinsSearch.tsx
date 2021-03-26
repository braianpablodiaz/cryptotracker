import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from './../../res/Color';

export interface Props {
  onChange: Function;
}

const CoinsSearch: React.FC<Props> = props => {
  const [query, setQuery] = React.useState('');

  const handleText = (text: string) => {
    setQuery(text);
    props.onChange(text);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={handleText}
        value={query}
        placeholder="Search Coin"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 16,
    color: Colors.white,
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
});

export default CoinsSearch;
