import React, {Component} from 'react';
import { Image, Modal, StyleSheet, ScrollView } from 'react-native';
import {Block, Text, Button, Utils} from "expo-ui-kit";

// constants
import { images, servers } from '../constants'; 
const {icons } = images;

// theme 
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class Vpn extends Component {
    state={
        connected:false,
        server:null,
        show:false,
        automatic:{
          name:"Automatic",
          icons:icons.automatic  
        }
    };
    
    handleConnect(){
      const { connected } = this.state;
      this.setState({ connected: !connected });
    }

    handleServer(server){
        this.setState({ server, connected: false, show:false });
      }

   renderServer(){
    const { server, automatic } = this.state;
    const connection = server || automatic;  
    return(
        <Block flex={false} row center middle >
          <Image source={connection.icons}/>
         <Text margin={[0,10,0,20]}>{connection.name}</Text>
         <Image source={images.icons.dropdown}/>
        </Block>
    );
}

renderServers (){
    const {show, server, automatic} = this.state;
    const connection = server || automatic;
    return(
        <Modal visible={show} animationType='fade'>
          <Block bottom color={rgba(COLORS.gray, 0.2)}> 
          <Block flex={false} white middle padding={[SIZES.padding, 0]}> 
            <Text subtitle center gray >Pick Your Server</Text>
             <ScrollView>
                {servers.map((item) => {
                   const isConnected =  connection.name === item.name;
                   const isChecked = icons[isConnected ? "checked":"unchecked"];
                   return(
                      <Button transparent 
                      key={`server-${item.name}`} onPress={() => this.handleServer(item)}>
                        <Block flex={false} 
                        row 
                        center 
                        space='between'
                        margin={[SIZES.padding, SIZES.padding ]}
                        >
                          <Block flex={false} row center>
                          <Image source={item.icons} />
                          <Text padding={[0, SIZES.h3]}>{item.name}</Text>
                          </Block>
                          <Image source={isChecked} />
                          </Block>
                      </Button>
                     )})}
            </ScrollView>
          </Block>
          </Block>
        </Modal>    
    );
}
    render() {
     const { connected } = this.state;
        return (
         <Block safe center space="between">
            <Block flex={false} padding={[20,0]}>
                <Text title semibold >Vpn</Text>
            </Block>
            <Block center middle flex={false}>
              <Block 
              flex={false}
              row 
              center 
              middle 
              white 
              shadow 
              radius={SIZES.base * 3}
              padding={[SIZES.base,SIZES.padding]}
              >
                  <Text 
                  subtitle 
                  gray 
                  semibold height={30}>
                      {connected ? "Connected" : "Disconnected"}
                  </Text>
                <Block 
                flex={false} 
                radius={10} 
                color={connected ? COLORS.success: rgba(COLORS.gray , 0.5)}
                style={styles.status} />
              </Block>
              <Image style={styles.image} 
              source={images.icons[connected ? "online":"offline"]}  />
              <Button 
              outlined={connected} 
              style={styles.connect} 
              onPress={() => this.handleConnect ()} >
                <Text 
                center 
                caption 
                bold
                white={!connected} 
                margin={[SIZES.padding / 2,0]}> 
                {connected ? "DİSCONNECTED" : "CONNECTED NOW"}
                </Text>
              </Button>
            </Block>

            <Block 
            flex={false} 
            middle 
            white 
            shadow 
            style={styles.servers}>
              <Button transparent onPress={() => this.setState({show:true})}>  
              {this.renderServer()}
                </Button>
            </Block>
            {this.renderServers()}
        </Block>
        );
    }
}


const styles = StyleSheet.create({
    connect: {
        width: SIZES.width / 2,
    },
    image:{
        width:180,
        height:180,
        marginVertical:10,
    },
    status:{
        width:8,
        height:8,
        marginLeft:10,
    },
    servers:{
     width:SIZES.width,
     height:SIZES.base * 9,
     shadowOffset:{
        width:0,
        height:-5,
     },
     shadowOpacity:0.05,
     shadowRadius: SIZES.base / 2,
    },   
});
