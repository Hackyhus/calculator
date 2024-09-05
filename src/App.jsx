import React,{useState} from "react"
import './App.css'



function App() {
 const [value, setValue] = useState('')
 
 
   return(
       <>
        <div className="container">
          <div className="calculator">
            <form action="">
              <div className="display">
                <input className="digits" type="text" value={value} placeholder="Load them Digits" />
              </div>
              <div>
                <input className="calc1" type="button" value="AC" onClick={e => setValue('')}/>
                <input className="calc1" type="button" value="DE" onClick={e => setValue(value.slice(0, -1) )} />
                <input className="calc1" type="button" value="%"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc1" type="button" value="/"  onClick={e => setValue(value + e.target.value)} />
              </div>
              <div>
                <input className="calc" type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="9"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc1" type="button" value="*" onClick={e => setValue(value + e.target.value)}  />
              </div>
              <div>
                <input className="calc" type="button" value="4"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="5"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="6"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc1" type="button" value="+"  onClick={e => setValue(value + e.target.value)} />
              </div>
              <div>
                <input className="calc" type="button" value="1"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="2"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="3"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc1" type="button" value="-"  onClick={e => setValue(value + e.target.value)} />
              </div>
              <div>
                <input className="calc" type="button" value="0"  onClick={e => setValue(value + e.target.value)} />
                <input className="calc" type="button" value="."   onClick={e => setValue(value + e.target.value)} />
                <input className="equal" type="button" value="="  onClick={e => setValue(eval(value))}/> 
              </div>
            </form>
          </div>
           <div className="calDescription">This calculator was made by HassiumAB</div>
        </div>
       
       </>
  )
}

export default App
