import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/ErrorAnimation';

const URL = 'https://fakestoreapi.com/products';

const Detail = ({route}) => {
  console.log(route)
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.img} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.dcs}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
