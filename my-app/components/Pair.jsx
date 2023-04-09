import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Pair = ({ name, timeBegin, timeEnd, teacher, type, audience, firstPair, handleNavigation, handleAuditory}) => {
    
    if (type == 'lection') {
        colorPair = '#6ec004'
    } else if (type == 'practice') {
        colorPair = 'orange'
    } else {
        colorPair = '#42a4f5'
    }

    const Time = styled.View`
        border-radius: 20px;
        background-color: ${colorPair};
        display: flex;
        flex-direction: column;
        padding: 5px 25px;
    `

    const TimeBeg = styled.Text`
        padding: 5px 0;
        font-size: 18px;
        border-bottom-width: 2px;
        border-bottom-color: white;
        color: white;
        font-weight: 500;
    `

    const TimeE = styled.Text`
        padding: 5px 0;
        font-size: 18px;
        color: white;
        font-weight: 500;
    `

    const PairInfo = styled.View`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left-width: 2px;
        border-left-color: ${colorPair};
        margin-left: 10px;
        border-radius: 15px;
        padding: 5px 10px;
        max-width: 70%;
    `

    const PairInfoText = styled.Text`
        font-size: 18px;
        padding: 2px;
    `
    

    const DayHeader = styled.Text`
        width: 95%;
        padding: 20px;
        background-color: #1e3f7a;
        margin-top: 10px;
        font-size: 24px;
        color: white;
        font-weight: 600;
        border-radius: 10px;
    `   
    const PairLabel = styled.View`
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    max-height: 120px;
`



    return (
        <>
            {firstPair ? <DayHeader>{firstPair}</DayHeader> : null}
            <PairLabel>
                <Time>
                    <TimeBeg>
                        {timeBegin}
                    </TimeBeg>
                    <TimeE>
                        {timeEnd}
                    </TimeE>
                </Time>
                <PairInfo>
                {audience ? <TouchableOpacity onPress={() => {
                    handleNavigation(audience) 
                    handleAuditory(audience)
                    }}>
                        <PairInfoText>{name}</PairInfoText>
                        <PairInfoText>{teacher}</PairInfoText>
                        <PairInfoText>{audience}</PairInfoText>
                    </TouchableOpacity> 
                    :
                    <TouchableOpacity>
                        <PairInfoText>{name}</PairInfoText>
                        <PairInfoText>{teacher}</PairInfoText>
                        <PairInfoText>{audience}</PairInfoText>
                    </TouchableOpacity> 
                }
                </PairInfo>
            </PairLabel>
        </>

    )
}
