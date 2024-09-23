import React from 'react';
import './App.css';
import Greet from './components/compotypes/Greet';
import GreetAsClass from './components/compotypes/GreetAsClass';
import Hello from './components/Hello'
import PropssFunctional from './components/Propss/PropssFunctional';
import PropssClasss from './components/Propss/PropssClasss';
import DynamicChange from './components/Propss/SetState/DynamicChange';
import Counter from './components/Propss/SetState/Counter';
import StateHook from './components/Hooks/StateHook';
import Counter2 from './components/Hooks/Counter2';
import Object from './components/Hooks/Object'
import ArrayHook from './components/Hooks/ArrayHook';
import UseEffects from './components/Hooks/UseEffects';
import UseEffects2 from './components/Hooks/UseEffects2';
import FetchDataExample from './components/Hooks/FetchDataExample';
import FormData from './components/Hooks/FormData';
import Conditional from './components/Rendering/Conditional';
import ParentComp from './components/Propss/MthodsAsProps/ParentComp';
import List_Keys from './components/Rendering/List_Keys';
import AddStyles from './components/Applying_styles/AddStyles';
import Anti_Key_list from './components/Rendering/Anti_Key_list';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        {/* <h1>functional component</h1>
        <Greet name="vengababu"/>
        <Greet name="Vinay"/> */}
        {/* <h1>Class component</h1>
        <GreetAsClass name="Ganesh"/>
        <GreetAsClass name="Vinod"/> */}
        {/* <Hello/> */}
        {/* <PropssFunctional name="vengababu" current_address="hyderabad" >
          <p>Continue Your learning...</p>
        </PropssFunctional> */}
        {/* <PropssClasss name="vengababu" address="Nellore"/> */}
        {/* <DynamicChange/> */}
        {/* <Counter/> */}
       {/* <StateHook/> */}

       {/* <Counter2/> */}
       {/* <Object/> */}
       {/* <ArrayHook/> */}
       {/* <UseEffects/> */}
       {/* <UseEffects2/> */}
       {/* <FetchDataExample/> */}
       {/* <FormData/> */}

       {/* <Conditional/> */}

       {/* <ParentComp/> */}

       {/* <List_Keys/> */}

       {/* <AddStyles/> */}
       <Anti_Key_list/>
      </div>
    )
  }
}

export default App;


