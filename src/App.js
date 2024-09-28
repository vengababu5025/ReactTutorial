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
import Fragmentss from './components/Fragments/Fragmentss';
import Nav from './components/Routing/Nav'
import About from './components/Routing/About'
import Contact from './components/Routing/Contact'
import Home from './components/Routing/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Routing_Nav from './components/Routing_Nav';
import Parent_memo from './components/Memos/Parent_memo';
import Child_Memo from './components/Memos/Child_Memo';
import Nested_Frags from './components/Fragments/Nested_Frags';
import Hok_run_once from './components/Hooks/Hook_run_Once/Hok_run_once';
import WillMount from './components/Hooks/WillMount';
import MyComponent from './components/Hooks/MyComponent';
import Wrongly_effect from './components/Hooks/Wrongly_effect';
import UseEffect_Props from './components/Hooks/UseEffect_Prop/UseEffect_Props';
import Example1 from './components/Example/Example1';
import Example2 from './components/Example/Example2';
import Example3 from './components/Example/Example3/Example3';
import Example4 from './components/Example/Example4';
import Example5 from './components/Example/Example5';
import Example6 from './components/Example/Example6';
import Example7 from './components/Example/Example7';
import Example8 from './components/Example/Example8';
import Example9 from './components/Example/Example9';
import Example10 from './components/Example/Example10';
import Context from './components/Hooks/Context/Context';


class App extends React.Component{
  render(){
    return(
      <div >
        {/* <h1>functional component</h1>
        <Greet name="vengababu"/>
        <Greet name="Vinay"/> */}
        {/* <h1>Class component</h1>
        <GreetAsClass name="Ganesh"/>
        <GreetAsClass name="Vinod"/> */}
        {/* <Hello/> */}
        {/* <PropssFunctional name="vengababu" current_address="hyderabad" >
          <p>Continue Your learning...
          </p>

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
       {/* <Anti_Key_list/> */}
       {/* <Fragmentss/> */}
       {/* <Nested_Frags/> */}

        {/* <Parent_memo/>
        <Child_Memo/> */}
        {/* <Hok_run_once/> */}
        {/* <WillMount/> */}
        {/* <Wrongly_effect/> */}
        {/* <UseEffect_Props/> */}

        {/* <Example1/> */}
        {/* <Example2/> */}
        {/* <Example3/> */}
        {/* <Example4/> */}
        {/* <Example5/> */}
        {/* <Example6/> */}
        {/* <Example7/> */}
        {/* <Example8/> */}
       {/* <Example9/> */}
       {/* <Example10/> */}
       <Context/>
      </div>

      
      // <Router>
      //   <div>
      //     <Nav/>
      //     <Routes>
      //       <Route path='/' element={<Home/>}></Route>
      //       <Route path='/About' element={<About/>}></Route>
      //       <Route path='/Contact' element={<Contact/>}></Route>
      //     </Routes>

      //   </div>
      // </Router>
     
    )
  }
}

export default App;


