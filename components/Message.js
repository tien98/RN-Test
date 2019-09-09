import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from './Top';
import Navigator from './Navigator';

export default class Message extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <Top title="Your Message" />
                </View>
                <View style={styles.mid}>
                    <ScrollView>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{
                                fontSize: 16,
                                paddingLeft: 30,
                                paddingTop: 20,
                                paddingBottom: 20,
                                backgroundColor: '#f2f2f2'
                            }}>Active now</Text>
                            {
                                list.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.avatar_url } }}
                                        titleStyle={{ fontWeight: '800' }}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                        rightTitle={l.time}
                                        containerStyle={{ backgroundColor: '#f2f2f2' }}
                                        contentContainerStyle={{
                                            padding: 10,
                                            borderBottomColor: '#e9e9e9',
                                            borderColor: '#f2f2f2',
                                            borderWidth: 1
                                        }}
                                    />
                                ))
                            }
                        </View>

                        <View style={{ paddingTop: 20 }}>
                            <Text style={{
                                fontSize: 16,
                                paddingLeft: 30,
                                paddingTop: 20,
                                paddingBottom: 20,
                                backgroundColor: '#f2f2f2'
                            }}>Archives</Text>
                            {
                                list.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.avatar_url } }}
                                        titleStyle={{ fontWeight: '800' }}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                        rightTitle={l.time}
                                        containerStyle={{ backgroundColor: '#f2f2f2' }}
                                        contentContainerStyle={{
                                            padding: 10,
                                            borderBottomColor: '#e9e9e9',
                                            borderColor: '#f2f2f2',
                                            borderWidth: 1
                                        }}
                                    />
                                ))
                            }
                        </View>

                    </ScrollView>
                </View>
                <View style={{position:'absolute', bottom:80, left:180 }}>
                        <Button
                            buttonStyle={{ borderRadius: 50, width: 60, height: 60}}
                            ViewComponent={LinearGradient}
                            linearGradientProps={{
                                colors: ['#f8675c', '#e14071'],
                                start: { x: 0.5, y: 0 },
                                end: { x: 0.5, y: 1 },
                            }}
                            icon={
                                <Ionicons
                                    name="ios-add"
                                    size={26}
                                    color='#fdfaf7'
                                />}
                        ></Button>
                    </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Navigator />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    top: {
        flex: 2,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center'
    },
    mid: {
        flex:15,
        backgroundColor: '#e9e9e9'
    }
})
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        time: '5 min ago'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        time: '2 hours ago'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        time: '5 min ago'
    }
]