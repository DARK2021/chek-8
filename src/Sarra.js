import React from 'react';  

function Sarra(props){
return(
  <>
    <h1>{props.name}</h1>
    <img src={props.Img}/>
    <p>{props.desc}</p>
</>


)
}
export default Sarra;