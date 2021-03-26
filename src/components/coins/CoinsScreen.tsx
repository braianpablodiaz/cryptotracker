import React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Http from '../../libs/Http';
import {CONFIG} from '../../config/env.config';
import CoinsItem from './CoinsItem';
import Colors from './../../res/Color';
import CoinsSearch from './CoinsSearch';

const CoinsScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    coins: [],
    allCoins: [],
    loading: false,
  });

  useEffect(() => {
    getCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCoins = async () => {
    setState({...state, loading: true});
    const res = await Http.instance.get(CONFIG.URL_API);
    setState({coins: res.data, allCoins: res.data, loading: false});
  };

  const handlePress = (coin: any) => {
    navigation.navigate('CoinDetail', {coin: coin});
  };

  const handleSearch = (query: string) => {
    const coinsFilter = state.allCoins.filter((coin: any) => {
      return (
        coin.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLocaleLowerCase())
      );
    });

    setState({...state, coins: coinsFilter});
  };

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />

      {state.loading ? (
        <ActivityIndicator style={styles.loader} color="#fff" size="large" />
      ) : null}

      <FlatList
        data={state.coins}
        renderItem={({item}) => (
          <CoinsItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
