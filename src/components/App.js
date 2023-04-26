
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [mail , setMail] = useState('');
  const[password , SetPassword] = useState('');
  const[data , setData] = useState(false);
  const handleclick = (event)=>{
      event.preventDefault();
       if(mail!='' && password!=''){
            setData(true);
       }
  }
     
  return (
    <div>

     <h1>Parent Component</h1>
     
     <div>
     {data ? (<p>Your logged in!</p>) : (
     <form onSubmit={handleclick}>
 <label>UserName :
 </label>
 <input type="text" onChange={((e)=>setMail(e.target.value))} />
 <br/> <br/>&nbsp;&nbsp;
 <label>Password :</label>
 <input type="password" onChange={(e)=>SetPassword(e.target.value)} />
 <br/>&nbsp;&nbsp;<br/>
 <button>Login</button>

     </form>
     )}

     </div>
    
         
    </div>
  )
}

export default App
