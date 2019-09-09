import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Top extends Component {
    render() {
        return (
            <View style={styles.contentTop}>
                <View style={styles.contentLeft}>
                    <Feather name="align-left" size={30} color="#aaaaaa"></Feather>
                </View>
                <View style={styles.contentCenter}>
                    <Text style={styles.txtCenter}>{this.props.title}</Text>
                </View>
                <View style={styles.contentRight}>
                    <Ionicons 
                        style={styles.iconNotification}
                        name="ios-notifications-outline" 
                        size={30}
                        color="#aaaaaa"></Ionicons>
                    <Ionicons 
                        name="ios-search" 
                        size={30}
                        color="#aaaaaa"></Ionicons>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentTop:{
        flexDirection:'row',
        paddingLeft:30,
        paddingRight:30
    },
    contentLeft:{
        flex:1
    },
    contentCenter:{
        flex:3,
        alignItems:'center'
    },
    txtCenter:{
        fontSize:16
    },
    contentRight:{
        flex:1,
        flexDirection:'row'
    },
    iconNotification:{
        marginRight:20
    }
})