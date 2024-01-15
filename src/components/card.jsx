import React, { useEffect, useState } from 'react'
import './styles/card.css'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import './styles/show.css'
import { useNavigate } from 'react-router-dom'




const Card = ({ user, currentData, setCurrentData, idsToDelete, setIdsToDelete, afterDelete, setAfterDelete }) => {
    const [hovered, setHovered] = useState(false)
    const deleteUser = () => {
        const updatedUsers = currentData.filter(d => d.id !== user.id);

        setCurrentData(updatedUsers);
    }
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIdsToDelete(prevIds => {
            if (prevIds.includes(user.id)) {
              return prevIds.filter(item => item !== user.id);
            } else {
              return [...prevIds, user.id];
            }
          });
    }

    useEffect(() => {
        setHovered(false)
    },[currentData])

    return (<>
        {/* <Link to={`/employee/${user.id}`}>View</Link> */}
        <div className='card' onMouseEnter={() => { if (!idsToDelete.includes(user.id)) setHovered(true) }} onMouseLeave={() => { if (!idsToDelete.includes(user.id)) setHovered(false) }} onClick={(e) => { console
        .log('hi');
        if(idsToDelete.length < 1) 
                    navigate(`/employee/${user.id}`) 
        else
            handleCheckboxChange()
        }}>
            <div className="overlay" style={{ display: hovered ? 'block' : 'none' }}></div>
            <div className="content" onClick={(e) => {
                // console.log('hi')
                e.stopPropagation()
                
            }}>
            {/* <Link to={`/employee/${user.id}`}> */}
                <h1>{user.name}</h1>
                <p><b>Employee Id:</b> {user.id}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                {/* </Link> */}
                
                <div className='deleteIcon' style={{ display: hovered ? 'block' : 'none' }} onClick={(e) => { deleteUser(); e.stopPropagation(); }}>
                    <MdDelete size={20} />
                </div>

                <div className='editBtn'>
                    Edit
                </div> 


                <div className='selectBtn' style={{ display: hovered ? 'block' : 'none' }} onClick={(e) => { e.stopPropagation() }}>
                    <input
                        type="checkbox"
                          checked={idsToDelete.includes(user.id)}
                        onChange={() => handleCheckboxChange()}
                        style={{cursor:  'pointer'}}
                    />
                </div>
            </div>
        </div></>
    )
}

export default Card
