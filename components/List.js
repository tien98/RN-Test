import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class List extends Component {
    render() {
        return (
            <View style={styles.containerList}>
                <View style={styles.left}>
                    <Image
                        source={require('../image/1.png')}
                        style={{height: 100, width:140 , margin:20, borderRadius:20}}
                    />
                </View>
                <View style={styles.right}> 
                    <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                        <View style={{ flex:4}}>
                            <Text style={{fontSize:16, fontWeight:'bold', color:'#4a4a49'}}>Hotel blue Lagoon</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#aaaaaa'}}>$234</Text>
                                <Text style={{textDecorationLine:'line-through', marginLeft:5, color:'#cacbca'}}> $1285</Text>
                            </View>
                        </View>
                        <Feather style={{flex:1,lineHeight:80}} size={26} name="more-vertical"></Feather>
                    </View>
                    <View style={{flexDirection:'row', flex:1}}> 
                        <View style={{flexDirection:'row', flex:2,marginBottom:30}}>
                            <Feather name="map-pin" style={{lineHeight:20}} color='#a7a7a7'></Feather>
                            <Text style={styles.txtName}> Chicago</Text>
                        </View>
                        <View style={{flexDirection:'row', flex:1}}> 
                            <Feather name="heart" style={{lineHeight:20}} color='#a7a7a7'></Feather>
                            <Text style={styles.txtName}> 4k</Text>
                        </View>
                        <View style={{flexDirection:'row', flex:1}}>
                            <Feather name="message-square" style={{lineHeight:20}} color='#a7a7a7'></Feather>
                            <Text style={styles.txtName}> 766</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerList: {
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:20
    },
    left: {
        flex:1
    },
    right: {
        flex:1, justifyContent:'center'
    },
    txtName:{
        color:'#222324'
    }
})