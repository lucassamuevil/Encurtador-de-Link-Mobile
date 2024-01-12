import React from 'react';

import {ModalContainer,Container,Header, LinkArea, Title, LongUrl,ShortLinkArea,
ShortLinkUrl} from './styles';
import {Text, TouchableOpacity, View, TouchableWithoutFeedback, Share} from 'react-native';
import {Feather} from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


export default function ModalLink({onClose, data}) {

    function copylink(){
        Clipboard.setString(data.link);
    }

async function handleShare(){
    try{ 
      const result = await Share.share({
        message:`Link: ${data.link}`
      });

      if(result.action === Share.sharedAction){
        if(result.activityType){
            console.log('AtivityType');

        }else {
            //Compartilhou
            console.log('Compartilhado com sucesso!')
        }
      } else if (result.action ===Share.dismissedAction){
        console.log('Modal fechado!')
      }
    }catch(error){
        console.log(error.message);
    }

}
    return(

        <ModalContainer>

            <TouchableWithoutFeedback onPress={onClose}>
            <View  style = {{flex:1}}></View>
            </TouchableWithoutFeedback>
           

          <Container>
            <Header>
            <TouchableOpacity onPress={onClose}>
                <Feather
                name='x'
                color='#212743'
                size={30}

                />

            </TouchableOpacity>


            <TouchableOpacity onPress={handleShare}>
                <Feather
                name='share'
                color='#212743'
                size={30}
                />

            </TouchableOpacity>

            </Header>

            <LinkArea>
            <Title>Link encurtado </Title>
            <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

            <ShortLinkArea
             
             activeOpacity={1}  
             onPress={copylink}
            >
              

                <ShortLinkUrl numberOfLines={1} >
                 {data.link}
                </ShortLinkUrl>

                <TouchableOpacity onPress={copylink}>
                    <Feather
                    name='copy'
                    color='#FFF'
                    size={25}
                    />
                </TouchableOpacity>
            </ShortLinkArea>
                
            </LinkArea>
          </Container>
        </ModalContainer>
    )
}