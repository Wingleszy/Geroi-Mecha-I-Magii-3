import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Schedule } from './Schedule'
import { MapStgau } from './MapStgau'
import { News } from './News'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={News} options={{ title: 'Новости' }} />
            <Stack.Screen name="Map" component={MapStgau} options={{ title: 'Карта' }} />
            <Stack.Screen name="Schedule" component={Schedule} options={{ title: 'Расписание' }} />
        </Stack.Navigator>

    </NavigationContainer>
}