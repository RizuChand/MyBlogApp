
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { Login } from './components/login/login';
import { Posts } from './components/posts/posts';
import { Register } from './components/register/register';

function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Posts/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
            
         
        </Route>
        
          
        


      </Routes>
   
      
    

    
  );
}

export default App;
