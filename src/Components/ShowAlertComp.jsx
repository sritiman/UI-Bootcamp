import React,{useRef} from 'react'

export default function ShowAlertComp() {

  const inputRef = useRef(null);
  const btnRef = useRef(null);
  
  let timeoutRef = undefined;

  const showAlertAfter5s = ()=> {
    timeoutRef = setTimeout(()=>{
      alert(inputRef.current.value);
      btnRef.current.disabled = false;
    }, 5000);
    btnRef.current.disabled = true;
  }
  const cancelAlert = ()=> {
    console.log(timeoutRef);
    clearTimeout(timeoutRef);
    btnRef.current.disabled = false;
  }


  return (
    <>
    <input ref={inputRef} type="text"></input>
    <button onClick={showAlertAfter5s} ref={btnRef}>Show Alert after 5 s</button>
    <button onClick={cancelAlert}>Cancel Alert</button>
    </>
  )
}
