import React from 'react';
import IMAGEH from './Harold.jpg'
function Harold(props){
return(
    <>
    <a href={props.url}>
<button style={{ height:"40px",width:"60px"}} > 

    {props.HR}
</button>

</a>

</>
)
}
export default Harold;