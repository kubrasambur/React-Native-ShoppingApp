import {StyleSheet, Text, View, TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/ErrorAnimation';
import ProductCard from '../../components/ProductCard/ProductCard';

const URL = 'https://fakestoreapi.com/products';

const Jewelry = ({navigation}) => {
  const {loading, data, error} = useFetch(URL);
  const filteredData = data.filter(item => "jewelery" === item.category);

  const handleProductSelect=(id) =>{
    navigation.navigate("DetailPage",{id})
  }

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error />;
  }
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
  );

  return (
    <View>
      <FlatList data={filteredData} renderItem={renderProduct} />
    </View>
  );
};

export default Jewelry;

const styles = StyleSheet.create({});
