import React from 'react'
import MenuItems from './data'

function menu() {
    return (
        <div className="menu">
            <h1>Menu Item</h1>
            <div className='Menu-Item'>
              {MenuItems.map((menulist,key) =>{
                  return<div>{menulist.title}</div>
              })}
              <data />
            </div>
        </div>
    )
}

export default menu
