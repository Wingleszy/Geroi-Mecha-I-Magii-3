import React from 'react'
import { Text } from 'react-native'
import  styled from 'styled-components/native'

export const Post = ({title, date, description, img}) => {


    const Post = styled.View`
        border-width: 1px;
        padding: 10px 20px;
    `
    const TitlePost = styled.Text`
        font-size: 24px;
        font-weight: 600;
    `
    const DatePost = styled.Text`
        font-size: 14px;
        font-weight: 500;
        color: grey;
    `

    const DescriptionPost = styled.Text`
        font-size: 18px;
        font-weight: 400;
    `

    const PostImage = styled.Image`
        width: 100%;
        height: 250px;
        border-radius: 25px;
    `

  return (
    <Post>
        {img ? <PostImage source={{uri: img}}/> : null}
        <TitlePost>{title}</TitlePost>
        <DatePost>{date}</DatePost>
        <DescriptionPost>{description}</DescriptionPost>
    </Post>
  )
}
