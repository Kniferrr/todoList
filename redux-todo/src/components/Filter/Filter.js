import React from 'react'


function Filter(props) {
    const {changeFilterAll,changeFilterDone,changeFilterActive} = props;
  return (
    <>
    <button className='btn btn-dark' onClick={changeFilterAll}>All</button>
    <button className='btn btn-dark' onClick={changeFilterActive}>Active</button>
    <button className='btn btn-dark' onClick={changeFilterDone}>Done</button>
    </>
  )
}

export default Filter