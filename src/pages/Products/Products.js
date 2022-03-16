import {FlatList, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/ErrorAnimation';
import Loading from '../../components/Loading/Loading';

const URL = 'https://fakestoreapi.com/products';

const Products = ({navigation,route}) => {
  console.log(route)
  const {category} = route.params;
  const {loading,data,error}= useFetch(`${URL}/catgory/${category}`)

  const handleProductSelect=(id) =>{
    navigation.navigate("DetailPage",{id})
  }

  const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} />;

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />
};

export default Products;
