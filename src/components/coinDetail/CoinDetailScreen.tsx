import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Http from '../../libs/Http';
import Colors from './../../res/Color';
import CoinMarketItem from './CoinMarketItem';

const CoinsScreen = (props: any) => {
  const [state, setState] = React.useState({coin: {name: ''}, markets: [],});
  const [marketState, setMarketState] = React.useState({markets: [], loading: false});

  useEffect(() => {
    const param = props.route.params;
    props.navigation.setOptions({title: param.coin.symbol});
    getMarkets(param.coin.id);
    setState({
      ...state,
      coin: param.coin,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const getMarkets = async (coinId: string) => {
    setMarketState({markets:[], loading: true});
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    setMarketState({markets:markets, loading: false});
  };

  const getSections = (coin: any) => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];

    return sections;
  };

  const getSymbolIcon = (name: string) => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImg}
            source={{uri: getSymbolIcon(state.coin.name)}}
          />
          <Text style={styles.titleText}>{state.coin.name}</Text>
        </View>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections(state.coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.marketsTitle}>Markets</Text>

      {marketState.loading ? (
        <ActivityIndicator style={styles.loader} color="#fff" size="large" />
      ) : <FlatList
      style={styles.list}
      horizontal={true}
      data={marketState.markets}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <CoinMarketItem item={item}/>}
    />}

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  row: {
    flexDirection: 'row',
  },
  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketsTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteText: {
    color: Colors.white,
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine,
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
