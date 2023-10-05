import logo from './logo.svg';
import './App.css';
import ApiCallAxious from './Component/FunctionComponents/ApiCallAxious';
import APIPostCallOnButtonClick from './Component/FunctionComponents/APIPostCallOnButtonClick';
import ContextHook from './Component/FunctionComponents/3ContextHook';
import React from 'react';
export const UserContext = React.createContext();
export const PhoneContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <APIPostCallOnButtonClick/> */}
      {/* <ApiCallAxious/> */}
      
      <UserContext.Provider value={'Ali'}>
        <PhoneContext.Provider value={'03455887845'}>
      <ContextHook/>
      </PhoneContext.Provider>
      </UserContext.Provider>
      
     
    </div>
  );
}

export default App;
