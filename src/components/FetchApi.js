import React,{ useState, useEffect } from 'react'
import Dashboard from './Dashboard';
import axios from 'axios'

export default function FetchApi() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    setLoading(true);
    const response = await axios.get('https://vaultchain.asaifee.ml/user/info')
    
    setUsers(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Dashboard nickname={users.nickname} id={users.sub} avatar={users.picture} email={users.email} name={users.name}  />
  );
}
