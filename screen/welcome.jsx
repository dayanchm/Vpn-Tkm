import React, {Component} from 'react';
import { Image, ScrollView, StyleSheet} from 'react-native';
import {Block, Text, Button, Utils} from "expo-ui-kit";


// constants
import { background } from '../constants/images';

const backgrounds =[
    {
        title:"Secured Forever",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
        img: background.welcome,
    },
    {
        title:"Secured Forever",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
        img: background.encrypted,
    },
    {
        title:"Secured Forever",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
        img: background.privacy,
    },
] 

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class Welcome extends Component {
   
    renderImages() {
        return(
            <ScrollView 
            horizontal 
            pagingEnabled 
            scrollEnabled 
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}>
                {backgrounds.map((item,index) => (
          <Block 
          center
          key={`img-${index}`} 
          bottom 
          style={{ width: SIZES.width }} 
          >
             <Image 
             source={item.img} 
             resizeMode='center'  
             style={{
                 width:SIZES.width / 1.5,
                 height:"100%",
             }}
             />
             </Block>
                ))}
         
            </ScrollView>
        )
    }
     
    renderDots() {
        return(
            <Block row center middle flex={false}
             margin={[20, 0, 40, 0]}> 
              <Block 
                color={COLORS.gray}
               flex={false} 
               margin={[0, 6]} 
               radius={8} 
               style={{ width:8, height:8 }}/>
                <Block 
                color={rgba(COLORS.gray, 0.5)}
               flex={false} 
               margin={[0, 6]} 
               radius={8} 
               style={{ width:8, height:8 }}/>
                <Block 
                color={rgba(COLORS.gray, 0.5)}
               flex={false} 
               margin={[0, 6]} 
               radius={8} 
               style={{ width:8, height:8 }}/>
            </Block>
        )
    }

    render() {
        const { navigation } = this.props;
        return (
    <Block safe>
   <Block center middle>
     {this.renderImages()}
   </Block>
    <Block  bottom flex={false} center margin={60}  >
        <Text h3 semibold>Secured Forever</Text>
        <Text center caption margin={[10,0]}>
            Privacy  is a Human Right. 
        </Text>
        {this.renderDots()}
        <Button 
        color="#082032" 
        onPress={() => navigation.navigate("Vpn")}
        style={{ borderRadius:30 }} >
            <Text 
            white 
            center 
            caption 
            bold 
            margin={[12,50]} 
            size={25}>    
            Go to Vpn
            </Text>
        </Button>
    </Block>
    </Block>
        );
    }
}

   
const styles = StyleSheet.create({});