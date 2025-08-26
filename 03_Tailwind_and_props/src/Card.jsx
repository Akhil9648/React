import React from 'react'
function Card(props){
  console.log("props",props.channel);
    return(
    <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src={props.src}
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"></img>
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <p className="font-RubikBold ">{props.channel}</p>
            <p className="font-bold font-RubikBold">Price</p>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
        
    )
}

export default Card