import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Colors} from '../theme/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/HomeScreen.style';
import {CATEGORIES, MESONARY_LIST_DATA} from '../../src/data';
import {ScrollView} from 'react-native-gesture-handler';
import MasonryList from 'reanimated-masonry-list';
import {BlurView} from '@react-native-community/blur';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import BackDrop from './../components/BackDrop';
import ColorComp from '../components/ColorComp';
import SportsComp from '../components/SportsComp';
import SleevesComp from '../components/SleevesComp';
export default function HomeScreen() {
  const [categoryIndex, setCategoryIndex] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.borderContainer}>
          <View style={styles.Tabcontainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('./../assets/images/avatar.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}> Hi, James 👋</Text>
              <Text style={styles.text}>
                Discover fashion that suit your style
              </Text>
            </View>
            <TouchableOpacity style={styles.bellBox}>
              <FontAwesome name="bell" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchButton}>
            <TouchableOpacity style={styles.search}>
              <EvilIcons name="search" size={24} color="black" />
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tuneContainer}
              onPress={openFilterModal}>
              <MaterialCommunityIcons
                name="tune-vertical-variant"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 24}}>
            <View style={styles.newCollectionContainer}>
              <Text style={styles.newCollectionText}> New Collections</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <Card />
            
          </View>
          <View>
            <FlatList
              data={CATEGORIES}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 12,
                gap: 10,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item}
              renderItem={({item, index}) => {
                const isSelected = categoryIndex === index;
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: isSelected ? Colors.light : Colors.black,
                      margin: 10,
                      padding: 10,
                      marginTop: 15,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: isSelected ? 0 : 0.5,
                      borderColor: Colors.border,
                    }}>
                    <Text
                      style={{
                        color: isSelected ? Colors.black : Colors.light,
                        fontSize: 16,
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
            <MasonryList
              data={MESONARY_LIST_DATA}
              keyExtractor={(item): string => item}
              numColumns={2}
              onEndReachedThreshold={0.1}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}: any) => {
                return (
                  <View style={{padding: 6, flexDirection: 'row'}}>
                    <View
                      style={{
                        aspectRatio: index === 0 ? 1 : 2 / 3,
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 24,
                      }}>
                      <Image
                        resizeMode="cover"
                        style={[StyleSheet.absoluteFill]}
                        source={{uri: item.imageUrl}}
                      />
                      <View style={{flex: 1}}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <TouchableOpacity style={styles.box}>
                          <AntDesign name="heart" size={15} color="black" />
                        </TouchableOpacity>
                      </View>
                      <View style={{flex: 1, marginTop: '90%', padding: 5}}>
                        <BlurView style={styles.blurView}>
                          <Text style={styles.iconPrice}>${item.price}</Text>
                          <View style={styles.iconBox}>
                            <SimpleLineIcons
                              name="basket"
                              size={20}
                              color={Colors.black}
                            />
                          </View>
                        </BlurView>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={['85%']}
        ref={bottomSheetModalRef}
        backdropComponent={props => <BackDrop {...props} />}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter</Text>
          <Text style={styles.resetText}>Reset</Text>
        </View>
        <View style={{marginTop: 30}}>
          <ColorComp />
          <SportsComp />
          <SleevesComp />
        </View>
      </BottomSheetModal>
    </ScrollView>
  );
}

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        resizeMode="cover"
        style={styles.CardImage}
        source={require('./../assets/images/image-1.jpg')}
      />
    </View>
  );
};
