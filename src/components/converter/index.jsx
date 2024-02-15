import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amount,getVal,reverseBtn,firstVal,secondVal } from '../../store/actions'

 const  Converter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
   console.log(firstVal);
  return (
    <div className= 'bg-emerald-800'>
        <h1>Currency converter</h1>
        <div className=' w-50 bg-slate-100 rounded-md'>
            <h3>Amount</h3>
                <input type="number"  
                onChange={(e) => dispatch(amount(parseInt(e.target.value)))} />
          
            <h3>From</h3>
            <select onChange={(e)=>dispatch(firstVal(parseFloat(e.target.value)))} >
        <option value="85.5"> 🇺🇸 USD &#36;</option>
        <option value="90.0"> 🇪🇺 EUR &#8364;</option>
        <option value="0.90"> 🇷🇺 RUB ₽</option>
        <option value="24"> 🇦🇪 AED د.إ</option>
        <option value="1.06"> 🇮🇳 RUPEE ₹;</option>
        <option value="3.24"> 🇹🇷 LIRA &#8378;</option>
        
           </select>
           <br />
           <br />
           <button className=' w-9 h-9 bg-blue-800 font-bold ' onClick={()=>dispatch(reverseBtn())}>&#8645;</button>
            <h3>To</h3>
            <select onChange={(e)=>dispatch(secondVal(parseFloat(e.target.value)))} >
        <option value="89.5"> 🇺🇸 USD &#36;</option>
        <option value="90.0"> 🇪🇺 EUR &#8364;</option>
        <option value="0.90"> 🇷🇺 RUB ₽</option>
        <option value="24"> 🇦🇪 AED د.إ</option>
        <option value="1.06"> 🇮🇳 RUPEE ₹;</option>
        <option value="3.24"> 🇹🇷 LIRA &#8378;</option>
        <option value="89.40"> 🇰🇬 KGS</option>
           </select>
           <br />
           <br />
        <button className=' bg-rose-600'
         onClick={() => dispatch(getVal())}>Submit</button>
        
        <br />
        <br />
        <div className=' bg-amber-300 text-center font-bold from-neutral-950'>
        Result:{state.result}</div>
        </div>
    </div>
  )

}
export default Converter
