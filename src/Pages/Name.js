import React from 'react';
import {useState, useRef} from 'react';

const OutputName = (props) => {
  return (
    <div>
      Name: {props.name}
    </div>
  );
}

const InputBoxOnSubmitLocalState = (props) => {
  const [ localName, setLocalName ] = useState("Your Name");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateName(localName);
    setLocalName("");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p><b>Local State, update upstream on Submit:</b></p>
        <div>
          <label htmlFor="nameLocalState">Name: </label>
          <input id="nameLocalState" value={localName} onChange={(e) => setLocalName(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

const InputBoxOnSubmitUseRef = (props) => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateName(nameRef.current.value);
    nameRef.current.value="";
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p><b>useRef, update upstream on Submit:</b></p>
        <div>
          <label htmlFor="nameUseRef">Name: </label>
          <input id="nameUseRef" ref={nameRef} defaultValue="Your Name"/>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

const InputBoxDynamic = (props) => {

  return (
    <div>
      <p><b>Dynamically update upstream state onChange:</b></p>
      <div>
        <label htmlFor="nameDynamic">Name: </label>
        <input id="nameDynamic" value={props.name} onChange={(e) => props.updateName(e.target.value)}/>
      </div>
    </div>
  );
}

const Name = (props) => {
 
  return (
    <div>
      <OutputName name={props.name}/> <hr />
      <InputBoxOnSubmitLocalState updateName={props.updateName}/> <hr />
      <InputBoxOnSubmitUseRef updateName={props.updateName}/> <hr />
      <InputBoxDynamic name={props.name} updateName={props.updateName}/> <hr />
    </div>
  );
}

export default Name;
