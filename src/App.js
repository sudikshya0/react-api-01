
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import New from './components/New';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const[user,setUsers] = useState(null)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddUser=(localuser)=>{
    console.log("user add",localuser);
    handleClose();
    axios
    .post("https://fakerestapi123.herokuapp.com/users",
    {
        first_name: localuser
    }
    )
    .then((res)=>setUsers([...user,res?.data]))
    .catch((err)=>console.log(err));
  }
  const deleteUser=(id)=>{
    console.log('id',id)
    console.log('users',user)
    console.log("filtered",
    user.filter((i)=>i?.id!==id));

    setUsers(user.filter((i)=> i?.id!==id))


  //   axios
  //   .delete(`https://fakerestapi123.herokuapp.com/users/${id}`)
  //   .then(()=>{
  //     console.log("delete")
  // })
  //   .catch((error)=>console.log(error));
  }
  useEffect(()=>{
    const call=()=>{
      axios
      .get('https://fakerestapi123.herokuapp.com/users')
      .then((response)=>{
        console.log("res",response?.data)
        setUsers(response?.data)
    })
      .catch((error)=>console.log(error));
    };
    call()
  },[])
  return (
   <div className="App">

    <div onClick={handleShow} className="add__container">Add</div>
    
    <New show={show} hanndleClose={handleClose} AddUser={AddUser}/>
    
    {user ? (
      user.map((item,index)=><UserItem item={item} key={index} deleteUser={deleteUser}/>)):(<div>loading users</div>)}
   </div>
  );
}

export default App;
