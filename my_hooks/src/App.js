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
// 확인창에서 '취소'를 누르면 콘솔창에 Abort it이 출력됨. 
*/

/////////////////








/* import React from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () => window.removeEventListener("beforeunload", listener)
  
  return {enablePrevent, disablePrevent}
}

function App () {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
    <button onClick={enablePrevent}>Protect</button>
    <button onClick={disablePrevent}>UnProtect</button>
    </>
  )
}
export default App;
// Protect버튼을 누르고, 윈도우 창을 닫으면   "변경한 내용이 저장되지 않을 수 있습니다."라는 확인창이 뜸.
// UnProtect버튼을 누르고, 윈도우 창을 닫으면   바로 닫힘.
 */


////////////////


/*
 import React, { useEffect } from 'react'

const useBeforeLeave = (onBefore) => {
  
  const handle = () => {
    onBefore();
  }

  useEffect(()=>{
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle)
  }, [])

}


function App() {
  const begForLife = () => console.log("please Don`t leave")
  useBeforeLeave(begForLife)
  
  return (
    <h1>Hello</h1>
  )
}
export default App;
// 마우스가 document창을 벗어나면 콘솔창에 please Don`t leave가 출력됨.
 */


/////////////////////////


/*
 import React, { useEffect, useRef } from 'react'

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(()=> {
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  return { ref: element, style: {opacity: 0} };
}


function App() {
  const fadeInH1 = useFadeIn(3, 1);
  const fadeInP = useFadeIn(3, 5);
  return (
    <>
    <h1 {...fadeInH1}>Hello</h1>
    <p {...fadeInP}>lorem ipsum</p>
    </>
  )
}
export default App;
// Hello가 1초후에 3초동안 서서히 나타남.
// lorem ipsum이 5초후에 3초동안 서서히 나타남. 
*/


///////////////////////


/* import React, {useState, useEffect} from 'react';

const useNetwork = onChange => {
  const [status, setStatus ] = useState(navigator.onLine)
  
  const handleChange = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine)
  } 

  useEffect(()=> {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {window.removeEventListener("online", handleChange);
                   window.removeEventListener("offline", handleChange);}
    },[])

  return status;
}


function App() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline")
  }

  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
    <h1>{onLine ? "Online" : "Offline"}</h1>
    </>
  )
}
export default App;
// 온라인 상태일 때 화면에 Online이 표시되며, 콘솔창에 We just went online이 출력됨.
// 오프라인 상태일 때 화면에 Offline이 표시되며, 콘솔창에 We are offline이 출력됨.
 */

//////////////////////


/* 
import React, { useState, useEffect } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  })

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY })
  }

  useEffect(()=> {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return state;
}

function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh"}}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue"}}>Hi</h1>
    </div>
  )
}
export default App;
// 스크롤을 내리면 파란색의 Hi가 빨간색의 Hi로 바뀜.
*/

/////////////////////////


import React, {useState, useEffect, useRef } from 'react';

const useFullscreen = (onFullS) => {
  const element = useRef();

  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen();

      if(onFullS && typeof onFullS === "function") {
        onFullS(true)
      }
    }
  }

  const exitFull = () => {
    document.exitFullscreen();

  if(onFullS && typeof onFullS === "function") {
    onFullS(false)
    }
  }
  return { element, triggerFull, exitFull }
}
  

function App() {
  
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }

  const {element, triggerFull, exitFull } = useFullscreen(onFullS);
  
  return (
    <>
    <div ref={element}>
      <img  src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
      <button onClick={exitFull}>Exit Full</button>
    </div>
    <button onClick={triggerFull}>Make Full</button>
    </>
  )
}
export default App;
// Make Full 버튼을 누르면 스크린이 커지면서 콘솔창에 We are full이 출력됨.
// Exit Full 버튼을 누르면 스크린이 원래대로 작아지면서 콘솔창에 We are small이 출력됨.











