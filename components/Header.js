import React from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon,  } from 'native-base'
import {Image, StatusBar, Dimensions} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../assets/svg/handBugger.svg' 
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const HeaderComponent = (props) => {
  console.log(props.navigation)
    return (
       <Header transparent  style={styles.header}>
        <StatusBar backgroundColor="transparent" hidden={false} barStyle="light-content"/>
          <Left style={{flex:1}}>
            <Button onPress={()=>props.navigation.openDrawer()} transparent>
              <HandBugger width={30*rem} height={30*rem}/>
            </Button>
          </Left>
          <Body  style={{flex:1}}>
            <Title style={styles.textStyle}>{props.screenName}</Title>
          </Body>
          <Right style={{flex:1}}>
            { !props.back ?   
            <Button  onPress={()=>props.navigation.navigate('Settings')}   transparent>
              <Image resizeMode="cover" style={styles.userImage} source={require('../assets/images/image.jpeg')}/>
            </Button>
            : 
            <Button  onPress={()=>props.navigation.navigate(props.backScreen)}   transparent>
               <Icon style={{color:'#FF912C'}} type="FontAwesome5"  name="arrow-left"/>
            </Button>
            }
          </Right>
       </Header>
    );
}
const styles = EStyleSheet.create({
    header:{
       backgroundColor: "#0C0C0E",
       paddingTop: '48rem',
       paddingBottom: '20rem',
       paddingLeft: '20rem',
       height:"90rem",
       borderWidth:'0rem',
       borderColor:'#0c0c0e'
    },
    userImage:{
        height: '50rem',
        width:'50rem',
        borderRadius: '70rem',
        borderWidth: '2rem',
        borderColor: "#FF912C",
        alignSelf: 'center',
    },
    textStyle:{
        color:"#fff",
        alignSelf: 'center',
        paddingTop:0,
        justifyContent: 'center',
    }
})
export default HeaderComponent;