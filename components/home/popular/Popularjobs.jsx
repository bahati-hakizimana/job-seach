import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCrd from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

import styles from './popularjobs.style'

const Popularjobs = () => {

  const router = useRouter();
 const { data, isLoading, error} = useFetch
 ('search', {
  query: ' React developer',
  num_pages: 1
 })
 console.log(data);
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.cardsContainer}>

      {
        isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went wrong</Text>
        ) : (
          <FlatList
          data={[1,2,3,4]}
          renderItem={({item}) => (
            <PopularJobCrd
            item={item}
             />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={ { columnGap: SIZES.small }}
          horizontal
           />
        )
        
      }

     </View>
    </View>
  )
}

export default Popularjobs