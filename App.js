import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';

import iconHome from './assets/iconHome.png';
import iconMessage from './assets/iconMessage.png';
import iconSearch from './assets/iconSearch.png';
import iconSino from './assets/iconSino.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.topBar}>
          <Image style={styles.imgTopBar} source={{ uri: 'https://scontent.fbhz3-1.fna.fbcdn.net/v/t1.0-9/p960x960/46489681_2107076559359276_7336840164989206528_o.jpg?_nc_cat=111&_nc_oc=AQm9Ul0kc_Iue1RAqeNvyfn_Pm5aqiGig1aAfFhZtvdlOXAsE4zRv3NOswsqGNiqRaHjg8DRv3icU3dCyt9UzJ2F&_nc_ht=scontent.fbhz3-1.fna&oh=8818d96053235c72e64add4f1fdcc18e&oe=5E8A7B52' }} />
          <Text style={{ fontSize: 23, fontWeight: 'bold', fontFamily: 'Roboto' }}>Página Inicial</Text>
      </View>

      <View style={styles.pubs}>

          <View style={styles.pub}>
            <Image style={styles.imgProfilePub} source={{ uri: 'https://newtrade.com.br/wp-content/uploads/2015/07/Logo-nike.jpg' }} />

            <View style={styles.info}>
              <Text style={styles.titleProfile}>Nike</Text>
              <Text style={styles.message}>Mamba Forever.</Text>

              <View style={styles.imagePubBorder}>
                <Image style={styles.pubImg} source={{ uri: 'https://pbs.twimg.com/media/EPPfghhU4AAs4pY?format=jpg&name=4096x4096' }} />
              </View>

              <View style={styles.buttonsPubs}>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Like</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>

          <View style={styles.pub}>
            <Image style={styles.imgProfilePub} source={{ uri: 'https://pbs.twimg.com/profile_images/1168615163995537414/r729hUhv_400x400.jpg' }} />

            <View style={styles.info}>
              <Text style={styles.titleProfile}>South America Memes</Text>
              <Text style={styles.message}>oloko</Text>

              <View style={styles.imagePubBorder}>
                <Video
                  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                  rate={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  style={styles.pubVideo}
                />
              </View>

              <View style={styles.buttonsPubs}>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Like</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>

          <View style={styles.pub}>
            <Image style={styles.imgProfilePub} source={{ uri: 'https://pbs.twimg.com/profile_images/1173692152410451969/GtN7LSDv_400x400.jpg' }} />

            <View style={styles.info}>
              <Text style={styles.titleProfile}>McDonald's Brasil</Text>
              <Text style={styles.message}>Sandubão do aniversário de São Paulo</Text>

              <View style={styles.imagePubBorder}>
                <Image style={styles.pubImg} source={{ uri: 'https://pbs.twimg.com/media/EOwkrdqWkAUTo5-?format=jpg&name=small' }} />
              </View>

              <View style={styles.buttonsPubs}>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Like</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>

          <View style={styles.pub}>
            <Image style={styles.imgProfilePub} source={{ uri: 'https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg' }} />

            <View style={styles.info}>
              <Text style={styles.titleProfile}>Rocketseat</Text>
              <Text style={styles.message}>Rocketseat Experience 2019</Text>

              <View style={styles.imagePubBorder}>
                <Image style={styles.pubImg} source={{ uri: 'https://lh3.googleusercontent.com/-N1DD9_I5jar9h2XyeQX74OdGFQMsd4bl974PEtkCqWo-6beegoDTADWiarvoFXjfidM' }} />
              </View>
  
              <View style={styles.buttonsPubs}>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Like</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>

          <View style={styles.pub}>
            <Image style={styles.imgProfilePub} source={{ uri: 'https://pbs.twimg.com/profile_images/867772988703338497/tEocoGE9_400x400.jpg' }} />

            <View style={styles.info}>
              <Text style={styles.titleProfile}>Quero Case</Text>
              <Text style={styles.message}>🍩 HUMM! Bateu uma fome!</Text>

              <View style={styles.imagePubBorder}>
                <Image style={styles.pubImg} source={{ uri: 'https://pbs.twimg.com/media/EQryIEQXYAozDSD?format=jpg&name=medium' }} />
              </View>

              <View style={styles.buttonsPubs}>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPub}>
                  <Text style={styles.txtButton}>Like</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>

      </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.buttonsIcon}>
          <Image source={iconHome} />   
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsIcon}>
          <Image source={iconSearch} />   
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsIcon}>
          <Image source={iconSino} />   
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsIcon}>
          <Image source={iconMessage} />   
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0'
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center',
    bottom: 0,
    right: 0,
    left: 0,
    height: 52,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonsIcon: {
    backgroundColor: '#bdc1c4',
    width: 90,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopColor: '#fff',
    borderStartColor: '#fff'
  },
  topBar: {
    flexDirection: 'row',
    marginTop: 25,
    height: 70,
    alignItems: 'center',
    borderWidth: 2,
    borderTopWidth: 0,
    borderTopColor: '#fff',
    borderStartColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  imgTopBar: {
    marginHorizontal: 20,
    width: 36,
    height: 36,
    borderRadius: 18
  },
  pub: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderTopColor: '#fff',
    borderStartColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  imgProfilePub: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginRight: 8,
    width: 70,
    height: 70,
    borderRadius: 35
  },
  titleProfile: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontFamily: 'Roboto'
  },
  imagePubBorder: {
    borderWidth: 2,
    borderTopColor: '#fff',
    borderStartColor: '#fff',
  },
  pubImg: {
    resizeMode: 'stretch',
    width: 245,
    height: 150
  },
  pubVideo: {
    width: 245,
    height: 150
  },
  buttonsPubs: {
    flexDirection: 'row',
    marginTop: 5
  },
  buttonsPub: {
    backgroundColor: '#bdc1c4',
    width: 70,
    height: 30,
    marginRight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopColor: '#fff',
    borderStartColor: '#fff'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
