import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement2, increment2 } from '../../redusers/counterSlice2'

export function Counter() {
  const count2 = useSelector((state) => state.counter2.value2)
  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <span>{count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
    </div>
    </div>
  )
}