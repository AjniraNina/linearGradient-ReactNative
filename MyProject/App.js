import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [header, setHeader] = useState('This is some random header');
  const [inputValue, onChangeText] = React.useState('Whatever..');
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 25}}>
          <Text style={styles.headerStyle}>{header}</Text>
        </View>
        <View style={styles.bodyStyle}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 25,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={inputValue}
          />
          <TouchableOpacity onPress={() => setHeader(inputValue)}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F24141', '#7A29CA']}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Sample Button</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {color: '#58B647', fontSize: 25},
  bodyStyle: {},
  buttonStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    margin: 25,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#ffff', fontSize: 20, fontWeight: 'bold'},
});

export default App;
