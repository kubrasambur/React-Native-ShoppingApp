import {useEffect,useState} from 'react';
import axios from 'axios';

//CUSTOM HOOKS

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      //response u data olarak parçaladık ama productData isminde
      const {data: productData} = await axios.get(url);
      setData(productData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData()
  }, []);

  return {error,loading,data}
}

export default useFetch
