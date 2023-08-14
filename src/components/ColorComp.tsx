import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from './../data';
import {Colors} from '../theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function () {
  const [changeColor, setChangeColor] = useState(-1);
  return (
    <View>
      <Text style={styles.titleColor}>Color</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={COLORS}
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
                backgroundColor: isColor ? Colors.black : Colors.light,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: item.color,
                    height: 20,
                    width: 20,
                    borderRadius: 50,
                    margin: 2,
                  }}
                />
                <Text
                  style={{
                    color: isColor ? Colors.light : Colors.black,
                  }}>
                  {item.label}
                </Text>
                <Text
                  style={{
                    color: isColor ? Colors.light : Colors.black,
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
});
