import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SLEEVES} from '../data';
import {Colors} from '../theme/theme';

export default function SleevesComp() {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <View>
      <Text style={styles.titleColor}>Sleeves</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={SLEEVES}
        keyExtractor={({item}) => item}
        renderItem={({item, index}) => {
          const isColor = index === changeColor;
          return (
            <TouchableOpacity
            onPress={()=>setChangeColor(index)}
              style={{
                height: 30,
                width: 140,
                borderWidth: 0.5,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                marginTop: 20,
                marginHorizontal: 10,
                backgroundColor: isColor ? Colors.black : Colors.light,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    margin: 2,
                    color: isColor ? Colors.light : Colors.black,
                  }}>
                  {item.label}
                </Text>
                <Text
                  style={{
                    margin: 2,
                    color: isColor ? Colors.white : Colors.light,
                  }}>
                  [{item.itemCount}]
                </Text>
              </View>
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
  box: {
    height: 30,
    width: 140,
    borderWidth: 0.5,
    backgroundColor: Colors.light,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
