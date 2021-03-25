import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const logoImage = require('./../../assets/images/logo.png');

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.view}>
            <View style={styles.header}>
              <Image style={styles.logo} source={logoImage} />
              <Text style={styles.title}>Sing In</Text>
              <Text style={styles.subtitle}>Description</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              placeholder="Username"
              value={username}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
            />
            <Button
              title="Sing In"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  scroll: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '5%',
    backgroundColor: 'yellow',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%',
    fontSize: 25,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 25,
  },
  signUp: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 10,
  },
});

export default Login;
