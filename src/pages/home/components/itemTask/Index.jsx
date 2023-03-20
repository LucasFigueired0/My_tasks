import React from 'react'
import "./Styles.css"
const ItemTask = ({ time, description, igual, weekDay, deleteItem, idItem }) => {

    const onClickDelete = () =>{
        deleteItem(idItem)
    }

    return (
        <div className='new-item-task'>
            <div className={weekDay + "-time new-time"}>
                <p>{time}</p>
            </div>
            <div className={"new-desc"}>
                <div className={weekDay + "-time color-desc"}></div>
                <p>{description}</p>
                <div><button onClick={onClickDelete}>Delete</button></div>
            </div>
        </div>
    )
}

export default ItemTask