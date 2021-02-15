import React from 'react';
import './index.css';
import List from './List'

function App() {
  const [tudoList,setTudoList]=React.useState("");

  const [fruits,setFruits]=React.useState([])

  const ChangeItem=(event)=>{
    setTudoList(event.target.value)

  }
  const Items=()=>{
    setFruits((oldItems)=>{
      return [...oldItems,tudoList]

    });
    setTudoList(" ")

  }
  const deleteItem=(id)=>{
    console.log('deleted');
    setFruits((oldItems)=>{
      console.log(oldItems,"deleteeeeeeee");
      const newFit= oldItems.filter((arrElem,index)=>{
        
        return index !==id;
      })
      console.log(newFit,"deleteeeeeeee");
      return newFit
    })
}
  return (
    <div className="main_div">
      <div className="center_div">
      <br/>
      <h1> TuDo List App</h1>
      <br/>
      <input type='text' placeholder='Add a Items'
      value={tudoList }
       onChange={ChangeItem}/>
      <button onClick={Items}> + </button>
      {/* <ol type='none'> */}
         {/* <li>{tudoList}</li> */}
         
        {fruits.map((fruval,index)=>{
          return (<div><List text={fruval}
          key={index}
          id={index}
          onSelect={deleteItem} /><br/>
          </div>)
        })}

      {/* </ol> */}
      </div>

    </div>
  );
}

export default App;
