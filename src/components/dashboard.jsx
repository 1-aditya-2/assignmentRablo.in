import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './card'
import { MdDelete } from "react-icons/md";
import Header from './header'

import './styles/dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [idsToDelete, setIdsToDelete] = useState([])
    const [currentData, setCurrentData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          setData(result);
          setCurrentData(result);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
    
  
    // Handle search from the Header component
    const handleSearch = (value) => {
      console.log(value)
      const updatedData = data.filter(item => 
        item.id.toString().includes(value)
        );
        if(updatedData.length===0){
          setCurrentData(data)
        }
        setCurrentData(updatedData);

    };

    const handleGroupDelete = () => {
        const  updatedData = currentData.filter(item => !idsToDelete.includes(item.id))
        setCurrentData(updatedData)
        setIdsToDelete([])
    }

  
    if (isLoading) {
      return <div className='load'>Loading...</div>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  return (
    <>
    <Header onSearch={handleSearch} />
    <div className='dashboard-container'>
        {(idsToDelete.length > 0) > 0 && (
            <div  className='selected-number'>
                <div><h2>Selected Items: {idsToDelete.length} </h2></div>
                <div className="icon">Delete<MdDelete className='deleteIconn' size={40} onClick={handleGroupDelete}/></div>
            </div>
        )}
        <div className='cards-display'>
            {
              currentData?.map((card, key) =>( 
                         <Card
                            key={key}
                            user={card}
                            currentData={currentData}
                            setCurrentData={setCurrentData}
                            idsToDelete={idsToDelete}
                            setIdsToDelete={setIdsToDelete}
                         />
                    )
                )
            }
        </div>
    </div></>
  )
}

export default Dashboard