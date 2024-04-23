import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.body}>
          <View style={styles.searchBox}>
            <Text size={25} color="black">위치, 검색</Text>
          </View>
          <View style={styles.mainBox}>
            <View style={styles.mainSubBox}><Text size={25} color="black">방문(요양,간호,목욕)</Text></View>
            <View style={styles.mainSubBox}><Text size={25} color="black">주간호보, 단기보호</Text></View>
            <View style={styles.mainSubBox}><Text size={25} color="black">요양원, 공동생활 가정</Text></View>
            <View style={styles.mainSubBox}><Text size={25} color="black">복지용구</Text></View>
          </View>
          <View style={styles.secondBox}>
            <View style={styles.secondSubBox}><Text size={8} color="black">등급 신청 갱신</Text></View>
            <View style={styles.secondSubBox}><Text size={8} color="black">협력 업체</Text></View>
            <View style={styles.secondSubBox}><Text size={8} color="black">수기표(본인부담)</Text></View>
            <View style={styles.secondSubBox}><Text size={8} color="black">상담</Text></View>
          </View>
        </View>
        <View style={styles.section}>
          <Text size={20} >
            Home
          </Text>
        </View>
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
            The smartest Way to build your mobile app
          </Text>
          <Text size={30} bold white style={styles.title}>
            React Native Starter
          </Text>
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            A powerful starter project that bootstraps development of your
            mobile application and saves you $20 000*
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {isExtended ? '$499' : '$99'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
              <Text white size={14}>
                {isExtended
                  ? 'Multiple Applications License'
                  : 'Single Application License'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  searchBox:{
    height: 70,
    backgroundColor:"white",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: 'left',
    borderColor:"black",
    borderWidth: 10,
    borderRadius: 10,
    
  },
  mainBox:{
    backgroundColor:"#1eff00",
    padding: 20,
    margin: 20,
    flexWrap:'wrap',
    flexDirection:'row', // 자식 컴포넌트들의 배치 방향 설정 (row가로, column세로)
    justifyContent: "space-between" //자식 컴포넌트들의 간격(flex-start, flex-end, center, space-around, space-between, space-evenly)

  },
  secondBox:{
    height: 200,
    backgroundColor:"#002fff",
    paddingHorizontal: 20,
    flexDirection:'row', 
    margin: 20,
  },
  mainSubBox:{
    width:130,
    height:130,
    backgroundColor:"#00eeff",
    paddingHorizontal: 20,
    margin:10
  },
  secondSubBox:{
    width:50,
    height:50,
    backgroundColor:"#00eeff",
    paddingHorizontal: 20,
    margin:10
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
