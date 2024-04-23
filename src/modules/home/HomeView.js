import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button, RadioGroup, Dropdown } from '../../components';
const iconSearch = require('../../../assets/images/tabbar/search.png');

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
            <Image source={iconSearch}></Image>
            <Text size={25} color="black">위치, 검색</Text>
          </View>
          <View style={styles.mainBox}>
            <View style={styles.mainSubBox}>
            <Button
            style={[styles.demoButton, {flexBasis: '100%'}]}
            primary
            caption="방문(요양,간호,목욕)"
            onPress={() => {}}/>
          </View>
            <View style={styles.mainSubBox}>
              <Button
              style={[styles.demoButton, {flexBasis: '100%'}]}
              primary
              caption="주간호보, 단기보호"
              onPress={() => {}}/>
            </View>
            <View style={styles.mainSubBox}>
              <Button
              style={[styles.demoButton, {flexBasis: '100%'}]}
              primary
              caption="요양원, 공동생활 가정"
              onPress={() => {}}/>
            </View>
            <View style={styles.mainSubBox}>
              <Button
              style={[styles.demoButton, {flexBasis: '100%'}]}
              primary
              caption="복지용구"
              onPress={() => {}}/>
            </View>
            
          </View>
          <View style={styles.secondBox}>
            <View style={styles.secondSubBox}>
              <Button
                style={[styles.demoButton, {flexBasis: '100%'}]}
                primary
                caption="등급 신청 갱신"
                onPress={() => {}}/>
            </View>
            <View style={styles.secondSubBox}>
              <Button
                style={[styles.demoButton, {flexBasis: '100%'}]}
                primary
                caption="협력 업체"
                onPress={() => {}}/>
            </View>
            <View style={styles.secondSubBox}>
              <Button
                style={[styles.demoButton, {flexBasis: '100%'}]}
                primary
                caption="수기표(본인부담)"
                onPress={() => {}}/>
            </View>
            <View style={styles.secondSubBox}>
              <Button
                style={[styles.demoButton, {flexBasis: '100%'}]}
                primary
                caption="상담"
                onPress={() => {}}/>
            </View>
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
    borderWidth: 3,
    borderRadius: 10,
    flexDirection:'row', // 자식 컴포넌트들의 배치 방향 설정 (row가로, column세로)
    alignItems:"center"  // 자식 컴포넌트 정렬
  },
  mainBox:{
    backgroundColor:"#1eff0055",
    padding: 20,
    //marginVertical: 20,
    borderColor:"black",
    borderWidth: 3,
    borderRadius: 10,
    flexWrap:'wrap',
    flexDirection:'row', // 자식 컴포넌트들의 배치 방향 설정 (row가로, column세로)
    //justifyContent: "space-between" //자식 컴포넌트들의 간격(flex-start, flex-end, center, space-around, space-between, space-evenly)

  },
  secondBox:{
    height: 200,
    backgroundColor:"#002fff55",
    borderColor:"black",
    borderWidth: 3,
    borderRadius: 10,
    flexDirection:'row', 
    //flexWrap:"wrap",
    alignItems:"center",  // 자식 컴포넌트 정렬
    justifyContent: "center" 
  },
  mainSubBox:{
    width:150,
    height:150,
    borderColor:"black",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor:"#00eeff55",
    
    margin:10
  },
  secondSubBox:{
    width:85,
    height:160,
    marginHorizontal: 3,
    backgroundColor:"#00eeff",
    borderColor:"black",
    borderWidth: 3,
    borderRadius: 10,
    
    alignItems:"center"  // 자식 컴포넌트 정렬
  },
  demoButton: {
    marginTop: 0,
    marginBottom: 0,
    height:"100%",
    width:"100%",
    
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
