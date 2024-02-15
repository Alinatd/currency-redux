export const FIRSTVAL = 'FIRSTVAL'
export const SECONDVAL ='SECONDVAL'
export const REVERSE = 'REVERSE'
export const GETVAL = 'GETVAL'
export const AMOUNT = 'AMOUNT'

export const amount =(num)=>({
    type: AMOUNT,
    payload:num
})
export const firstVal = (num)=>({
    type: FIRSTVAL,
    payload:num
})
export const secondVal = (num)=>({
    type:SECONDVAL,
    payload:num
})
export const reverseBtn = ()=>({
    type: REVERSE,
    
})
export const getVal = ()=>({
    type: GETVAL
})
