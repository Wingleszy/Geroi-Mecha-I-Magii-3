import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

const Header = styled.View`
    font-size: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    border-bottom-width: 2px;
    padding: 15px 0;
    background-color: #1e3f7a;
    align-items: center;
`

const NavImageMap = styled.Image`
    height: 60px;
    width: 60px;
    padding: 5px;
    border-left-width: 2px;
`

const NavImageSchedule = styled.Image`
    height: 50px;
    width: 50px;
    padding: 5px;
`


export const Navbar = ({navigation}) => {
  return (
    <Header>
        <TouchableOpacity onPress={ () => navigation.navigate('Schedule')}>
          <NavImageSchedule source={require('../assets/schedule.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Map', {mapName: 'all'})}>
            <NavImageMap source={{uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087352.png'}} />
        </TouchableOpacity>
    </Header>
  )
}
