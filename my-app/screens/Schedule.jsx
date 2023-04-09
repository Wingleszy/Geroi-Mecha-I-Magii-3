import React, { useState } from 'react'
import { Text, View, FlatList, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { Pair } from '../components/Pair';
import { Navbar } from '../components/Navbar';

const CreateNewTask = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`

const InputTime = styled.View`
        border-radius: 20px;
        background-color: #42a4f5;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        margin-top: 10px;
        justify-content: space-evenly;
        margin-left: 5px;
        max-width: 160px;
`
const InputTimeItem = styled.TextInput`
    border-width: 1px;
    border-radius: 10px;
    padding: 0 5px;
    font-size: 22px;
    margin: 5px 0;
    color: white;
    
`

const NameInput = styled.View`
    display: flex;
    flex-direction: column;
    border-left-width: 2px;
    border-left-color: #42a4f5;
    margin-left: 10px;
    border-radius: 15px;
    padding: 5px 10px;
    margin-top: 10px;
    max-width: 160px;
`

const NameInputItem = styled.TextInput`
    border-width: 1px;
    border-radius: 10px;
    padding: 5px 15px;
    font-size: 22px;
    margin: 10px 0;
    margin-right: 10px;
`

const SubmitBtn = styled.Button`
    padding: 20px 0;
    border-radius: 20px;
`




export const Schedule = ({ navigation }) => {
    const [begData, setBegData] = useState('')
    const [endData, setEndData] = useState('')
    const [dayData, setDayData] = useState('')
    const [taskName, setTaskName] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [week, setWeek] = useState([{
        name: 'Физическая культура',
        timeBegin: '08:30',
        timeEnd: '10:05',
        teacher: 'Иванов А.И.',
        type: 'practice',
        audience: 'С.З./СК',
        firstPair: 'Понедельник'
    },
    {
        name: 'Численные методы',
        timeBegin: '10:15',
        timeEnd: '11:50',
        teacher: 'Яковлева Е.В.',
        type: 'lection',
        audience: '317/НК',
        firstPair: false
    },
    {
        name: 'Маркетинг',
        timeBegin: '12:30',
        timeEnd: '14:05',
        teacher: 'Иванова И.Ю.',
        type: 'practice',
        audience: '118/ЭиФ',
        firstPair: false
    },
    {
        name: 'Численные методы',
        timeBegin: '12:30',
        timeEnd: '14:05',
        teacher: 'Яковлева Е.В.',
        type: 'lection',
        audience: '317/ИДПО',
        firstPair: 'Вторник'
    },
    {
        name: 'Численные методы',
        timeBegin: '14:15',
        timeEnd: '15:50',
        teacher: 'Яковлева Е.В.',
        type: 'practice',
        audience: '317/НК',
        firstPair: false
    },
    {
        name: 'Численные методы',
        timeBegin: '08:30',
        timeEnd: '10:05',
        teacher: 'Яковлева Е.В.',
        type: 'lection',
        audience: '317/НК',
        firstPair: 'Среда'
    },
    {
        name: 'Численные методы',
        timeBegin: '12:30',
        timeEnd: '14:05',
        teacher: 'Яковлева Е.В.',
        type: 'practice',
        audience: '317/НК',
        firstPair: 'Четверг'
    },
    {
        name: 'Численные методы',
        timeBegin: '10:15',
        timeEnd: '11:50',
        teacher: 'Яковлева Е.В.',
        type: 'practice',
        audience: '317/НК',
        firstPair: 'Пятница'
    },
    {
        name: 'Численные методы',
        timeBegin: '12:30',
        timeEnd: '14:05',
        teacher: 'Яковлева Е.В.',
        type: 'lection',
        audience: '317/НК',
        firstPair: false
    },
    {
        name: 'Численные методы',
        timeBegin: '08:30',
        timeEnd: '10:05',
        teacher: 'Яковлева Е.В.',
        type: 'practice',
        audience: '317/ЭЭФ',
        firstPair: 'Суббота'
    },
    ])
    

    const handleButton = () => {
        if (!taskName) {
            Alert.alert('Ошибка!', 'Введите Название')
            return null
        }
        if (!begData) {
            Alert.alert('Ошибка!', 'Введите Дату')
            return null
        }

        let weekProp = [...week]

        let indexOfDay;

        dayData !== '' ? indexOfDay = week.findIndex(item => item.firstPair == dayData) :  indexOfDay = -1

        

        taskName.length > 26 ? setTaskName(taskName.slice(0, 26) + '...') : taskName
        taskDesc.length > 100 ? setTaskDesc(taskDesc.slice(0, 100) + '...') : taskDesc

        let newTask = {
            name: taskName,
            teacher: taskDesc,
            timeBegin: begData,
            timeEnd: endData,
        }
        
        weekProp.splice(indexOfDay + 1, 0, newTask)
        

        setWeek(weekProp)
        setBegData('')
        setEndData('')
        setTaskDesc('')
        setTaskName('')
    }
    const handleNavigation = (place) => {
        let building = place.split("/").slice(1, 2)
        let auditory = place.split("/").slice(0, 1)
        console.log(auditory);
        if (building == 'НК') {
            navigation.navigate('Map', { mapName: 'NK' })
        } else if (building == 'ИДПО') {
            navigation.navigate('Map', { mapName: 'IDPO' })
        } else if (building == 'АДМ') {
            navigation.navigate('Map', { mapName: 'adm' })
        } else if (building == 'СК') {
            navigation.navigate('Map', { mapName: 'sport' })
        } else if (building == 'ЭиФ') {
            navigation.navigate('Map', { mapName: 'EiF' })
        } else if (building == 'ЭЭФ') {
            navigation.navigate('Map', { mapName: 'EEF' })
        }
    }

    const fromArrayToStr = (arr = []) => {
        let res = []
        if (arr[0] == ["С.З."][0]) {
            res[0] = 'Спортзал'
        } else {
            res = arr[0]
        }
        return res[0]
    }

    const handleAuditory = (place) => {
        let auditory = (place.split("/").slice(0, 1))
        
        Alert.alert('Этаж', fromArrayToStr(auditory))
    }
    
    
    return (
        <>
            <CreateNewTask>
                <InputTime>
                    <InputTimeItem placeholder='Начало' onChangeText={(text) => { setBegData(text) }} value={begData} />
                    <InputTimeItem placeholder='Конец' onChangeText={(text) => { setEndData(text) }} value={endData} />
                    <InputTimeItem placeholder='День' onChangeText={(text) => { setDayData(text) }} value={dayData} />
                </InputTime>
                <NameInput>
                    <NameInputItem placeholder='Название' onChangeText={(text) => { setTaskName(text) }} value={taskName} />
                    <NameInputItem placeholder='Описание' onChangeText={(text) => { setTaskDesc(text) }} value={taskDesc} />
                    <SubmitBtn title='Создать' onPress={handleButton} color='#42a4f5' />
                </NameInput>

            </CreateNewTask>
            <FlatList data={week} renderItem={({ item }) => {
                return <Pair handleAuditory={handleAuditory} handleNavigation={handleNavigation} firstPair={item.firstPair} name={item.name} timeBegin={item.timeBegin} timeEnd={item.timeEnd} teacher={item.teacher} type={item.type} audience={item.audience} />
            }} />
            <Navbar navigation={navigation}/>
        </>
    )
}
