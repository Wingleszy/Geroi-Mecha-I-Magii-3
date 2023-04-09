import React, { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { FlatList, TouchableOpacity } from 'react-native';
import {Post} from '../components/Post'
import styled from 'styled-components/native'

const CreateNewPost = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    gap: 5px;
`

const InputPost = styled.View`
        border-radius: 20px;
        border-width: 2px;
        border-color: #33280240;
        background-color: #78bdf5cc;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        margin-top: 10px;
        justify-content: space-evenly;
        margin-left: 5px;
        flex: 1;
`
const InputPostItem = styled.TextInput`
    border-width: 1px;
    border-radius: 10px;
    padding: 0 5px;
    font-size: 22px;
    margin-top: 4px;
    color: white;
`

const SubmitBtn = styled.Text`
    margin-top: 20px;
    padding: 20px 10px;
    border-radius: 20px;
    border-width: 2px;
    border-color: #33280240;
    background-color: #78bdf5cc;
    font-size: 15px;
    font-weight: 500;
`

export const News = ({ navigation }) => {

    const [postName, setPostName] = useState('')
    const [postDesc, setPostDesc] = useState('')
    const [postImg, setPostImg] = useState('')

    const [posts, setPosts] = useState([
      {
        title: 'Ученые-исследователи Ставропольского ГАУ приняли участие в краевом съезде фермеров Ставрополья',
        date: 'В пятницу, в 14:00',
        description: 'В Министерстве сельского хозяйства Ставропольского края состоялся краевой съезд ассоциации фермерских хозяйств. В обсуждении вопросов развития фермерства на Ставрополье приняли участие доценты кафедры экономической теории, маркетинга и агроэкономики СтГАУ. На съезде фермеров собрались более 150 фермеров Ставропольского края, чтобы обсудить успехи и проблемы отрасли. Ставропольский аграрный университете представили доценты кафедры экономической теории, маркетинга и агроэкономики Анжелика Айдинова и Валентина Ивашова. На обсуждение были вынесены вопросы высокой стоимости аренды сельскохозяйственных земель, которую зачастую искусственно завышают недобросовестные конкуренты, и нехватки квалифицированных кадров в отрасли, во многом связанной с оттоком сельских жителей в города. Также говорили о необходимости усилить государственную поддержку крестьянских фермерских хозяйств, особенно в восточных районах Ставрополья, где рентабельность ферм и хозяйств значительно ниже, чем в других территориях, что часто приводит к их закрытию.',
        img: 'https://n2.stgau.ru/storage/2023/04/07/c14f76c40a3df5cc22626306d22d081bf0ab8272.jpg'
      },
      {
        title: 'Профессор СтГАУ выступила на международном семинаре по защите растений',
        date: 'Во вторник, в 18:00',
        description: 'Профессор кафедры химии и защиты растений, доктор сельскохозяйственных наук Наталья Глазунова приняла участие в семинаре компании в Москве. Мероприятие было организовано стратегическим партнером «АДАМА РУС» в Москве. В семинаре принимали участие представители сельскохозяйственных предприятий и организаций АПК из России и Беларуси. Профессор Наталья Глазунова выступила перед специалистами компании с докладом «Проведение исследований по изучению биологической эффективности препаратов ООО «АДАМА РУС» в сравнении с другими конкурентными препаратами и влияние их на урожайность в посевах озимой пшеницы». В ходе дискуссии были обсуждены вопросы расширения линейки фунгицидов для защиты озимой пшеницы от фузариоза колоса, эффективности препаратов против листовых болезней в фазу трубкования культуры, а также влияния концентрации действующих веществ в инсектицидах на срок защитного действия в отношении клопа вредной черепашки.',
        img: 'https://n2.stgau.ru/storage/2023/04/06/6627a60a51d67020fa35f0c243df70de09274e03.jpg'
      },
      {
        title: 'Ученые-исследователи Ставропольского ГАУ приняли участие в краевом съезде фермеров Ставрополья',
        date: 'В пятницу, в 14:00',
        description: 'В Министерстве сельского хозяйства Ставропольского края состоялся краевой съезд ассоциации фермерских хозяйств. В обсуждении вопросов развития фермерства на Ставрополье приняли участие доценты кафедры экономической теории, маркетинга и агроэкономики СтГАУ. На съезде фермеров собрались более 150 фермеров Ставропольского края, чтобы обсудить успехи и проблемы отрасли. Ставропольский аграрный университете представили доценты кафедры экономической теории, маркетинга и агроэкономики Анжелика Айдинова и Валентина Ивашова. На обсуждение были вынесены вопросы высокой стоимости аренды сельскохозяйственных земель, которую зачастую искусственно завышают недобросовестные конкуренты, и нехватки квалифицированных кадров в отрасли, во многом связанной с оттоком сельских жителей в города. Также говорили о необходимости усилить государственную поддержку крестьянских фермерских хозяйств, особенно в восточных районах Ставрополья, где рентабельность ферм и хозяйств значительно ниже, чем в других территориях, что часто приводит к их закрытию.',
        img: 'https://n2.stgau.ru/storage/2023/04/07/39abf1745be07667724bf24d5a8d45c99d8f3448.jpg'
      }
    ])

    const createPost = () => {
      setPosts((prev) => [{
        title: postName,
        date: (new Date().getHours() + 3) + ':' + new Date().getMinutes(),
        description: postDesc,
        img: postImg
      }, ...prev])
    }

  return (
    <>
      <CreateNewPost>
                <InputPost>
                    <InputPostItem placeholder='Название' onChangeText={(text) => { setPostName(text) }} value={postName} />
                    <InputPostItem placeholder='Описание' onChangeText={(text) => { setPostDesc(text) }} value={postDesc} />
                    <InputPostItem placeholder='Ссылка на изобр' onChangeText={(text) => { setPostImg(text) }} value={postImg} />
                </InputPost>
                <TouchableOpacity onPress={createPost}>
                  <SubmitBtn>Создать пост</SubmitBtn>
                </TouchableOpacity>
            </CreateNewPost>
      <FlatList data={posts} renderItem={({ item }) => {
        return <Post title={item.title} date={item.date} description={item.description} img={item.img} />
      }} />
      <Navbar navigation={navigation}/>
    </>
  )
}
