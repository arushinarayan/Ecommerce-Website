import {useState} from "react";
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
    <div className="col-xl-1">
    <div class="input-group" style={{display:'flex'}}>
  <div class="input-group-prepend">
    <button class="btn " type="button" style={{backgroundColor: 'white', border:'none'}} onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange} style={{width: 30, textAlign:'center', border: '2px solid grey', color: "grey", borderRadius:5}}/>
  <div class="input-group-prepend">
    <button class="btn" type="button" style={{backgroundColor: 'white', border:'none'}} onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;