import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {SPORTSITEM} from './../data';
import {Colors} from '../theme/theme';
import {TouchableOpacity} from '@gorhom/bottom-sheet';

export default function SportsComp() {
  const [changeColor, setChangeColor] = useState(-1);
  return (
    <View>
      <Text style={styles.titleColor}>Sports</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={SPORTSITEM}
        keyExtractor={({item}) => item}
        renderItem={({item, index}) => {
          const isColor = index === changeColor;
          return (
            <TouchableOpacity
              onPress={() => setChangeColor(index)}
              style={{
                height: 30,
                width: 100,
                borderWidth: 0.5,
                backgroundColor: isColor ? Colors.black : Colors.white,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <Text style={{color: isColor ? Colors.light : Colors.black}}>
                Item [{item.id}]
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleColor: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
