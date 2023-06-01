/*
import React, { useState } from 'react';

 function App() {
    const [item, setItem] = useState(1);
    const increment = () => setItem(item + 1)
    const decrement = () => setItem(item - 1)

    return (
        <>
        <button onClick={increment}>plus</button>
        <button onClick={decrement}>minus</button>
        <div>{item}</div>
        </>
    );
}

export default App; */


////////////////


/* 
class App extends React.Component {
  state = {
    item: 1
  }

  increment = () => {
    this.setState(prev => {
      return {
        item: prev.item + 1
      }
    })
  }

  decrement = () => {
    this.setState(prev => {
      return {
        item: prev.item - 1
      }
    })
  }

    render(){
      const {item} = this.state
      return (
        <>
          <button onClick={this.increment}>plus</button>
          <button onClick={this.decrement}>minus</button>
          <div>{item}</div>
        </>
      )
    }
}
export default App; 
*/



/////////////////////



/* import React, { useState } from 'react';

const useInput = initial => {
  const [value, setValue] = useState(initial);
  return { value }
}

function App() {
  const name = useInput("Mr.")
  console.log(name) // {value: "Mr."}

  return (
    <>
    <input value={name.value} />
    </>
  )
}
export default App; */


////////////////////


/* import React, { useState } from 'react';

const useInput = (initial, validator) => {
  const [value, setValue] = useState(initial);

  const onChange = event => {
    const { target: { value } } = event
    let willUpdate = true;

    if(typeof validator === "function") {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
    return { value, onChange }

}
 

function App() {
  const maxLeng = value => value.length <= 10
  const letter = useInput("Mr.", maxLeng )
 
  return (
    <>
    <input {...letter} />
    </>
  )
}
export default App; */


//////////////////


import React, { useState } from 'react';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  }
]

const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setCurrentIndex] = useState(initialTab)

  if(!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}


function App() {
  const {currentItem, changeItem} = useTabs(0, content)
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={()=> changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  )
}
export default App;