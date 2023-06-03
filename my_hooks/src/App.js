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


/* 
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
*/






//////////////////////






/*
 import React, { useState, useEffect } from 'react';

 function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log("hello")
  
  useEffect(sayHello,
  [number]) // 오직 number값의 변화가 있을때만 이펙트 함수가 실행됨.

    return (
        <>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </>
    );
}
export default App;
// 첫번째 버튼(number)을 클릭하면 콘솔창에 hello가 출력되지만,
// 두번째 버튼(aNumber)을 클릭하면 콘솔창에 아무것도 출력되지 않음.
 */


///////////////////////


/* 
import React, { useState, useEffect } from 'react';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }

  useEffect(updateTitle, [title])

  return setTitle
} 


function App () {
  const titleUpdater = useTitle("Loading...")

  setTimeout(()=> titleUpdater("Home"), 5000)

  return (
    <>
    <div>Hi</div>
    </>
  )
}
export default App;
// 웹 문서의 타이틀이 처음에는 Loading...으로 표시되다가,
// 5초후에는 Home으로 표시됨. 
*/

/////////////////


/*
import React, { useRef } from 'react';

function App() {

  const potato = useRef(); // 1. useRef()를 변수에 담아줌.

  console.log(potato) // 콘솔창에 {current: input}이 출력됨. 
  console.log(potato.current) // 콘솔창에 <input placeholder="la">가 출력됨.
  potato.current.focus() 

  return (
    <>
    <div>Hi</div>
    <input ref={potato} placeholder="la" /> 
    </>
  ) // 2. select하려는 요소의 ref프로퍼티에 useRef()가 담긴 변수를 할당해줌.
}
export default App; 
*/

/////////////


/* 
import React, { useRef, useEffect } from 'react';

const useClick = onClick => {
  const element = useRef();

  useEffect(()=> {
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
  })
  return element;
}


function App() {
  const sayHello = () => console.log("hello")

  const title = useClick(sayHello);

  return (
    <>
    <h1 ref={title}>Hi</h1>
    </>
  )
}
export default App; 
// 화면의 Hi를 클릭하면 콘솔창에 hello가 출력됨. 
*/


//////////////////


/* import React, { useRef, useEffect } from 'react';

const useClick = onClick => {
  const element = useRef();

  useEffect(()=> {
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => { // 클린업 함수
      if(element.current) {
        element.current.removeEventListener("click", onClick);
      } // 컴포넌트가 언마운트될때 이벤트 리스너가 제거됨.
    }
  }, [])
  return element;
}


function App() {
  const sayHello = () => console.log("hello")

  const title = useClick(sayHello);

  return (
    <>
    <h1 ref={title}>Hi</h1>
    </>
  )
}
export default App;  */


//////////////////////


/* import React from 'react';

const useConfirm = (message="", callback, rejection) => {
  
  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
}


function App() {
  const deleteIt = () => console.log("Delete it")
  const abort = () => console.log("Abort it")

  const confirmDelete = useConfirm("Are you sure", deleteIt, abort)

  return (
    <>
    <button onClick={confirmDelete}>Delete</button>
    </>
  )
}
export default App;
// 화면의 Delete 버튼을 누르면 Are you sure메시지가 담긴 확인창이 뜸.
// 확인창에서 '확인'을 누르면 콘솔창에 Delete it이 출력됨.
// 확인창에서 '취소'를 누르면 콘솔창에 Abort it이 출력됨. */