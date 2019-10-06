
import React from 'react'


const Contact = (props)=>{
    const {history} = props
    return(
 
    <div className ='' >
     <div className ='btn' ><button onClick={()=>history.push('/shop')}>Boom</button></div> {             
    console.log('cantact')
    }
    {
     console.log(props)
    }
    </div>   
    )
}

export default Contact;