import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Mid extends Component {

    render() {
        return (
            <View>
                <View style={styles.contentMid}>
                    <View style={styles.left}>
                        <Text style={styles.titleLeft}>Featured</Text>
                        <Text style={{ fontSize: 12 , color:'#878787'}}>214 SPOTS</Text>
                    </View>
                    <View style={styles.right}>
                        <Button
                            buttonStyle={{ borderRadius: 50, width: 120 }}
                            titleStyle={{ color: "#fdfaf7" }}

                            title=" Filters"
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
                                    color='#f194ff'
                                />}
                        ></Button>
                    </View>
                </View>

                <View style={styles.container}>
                   
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contentMid: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    left: {
        flex: 2
    },
    titleLeft: {
        fontSize: 25,
        fontWeight: '800',
        color:'#434343'
    },
    right: {
        flex: 1
    },
    content: {
        flex: 4
    },
    list: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        height: 200
    }
})
