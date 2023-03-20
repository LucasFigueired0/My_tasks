import React from 'react'
import "./Styles.css"
const ItemTask = ({ time, description, weekDay, deleteItem, idItem, repeat, dados }) => {

    const onClickDelete = () =>{
        deleteItem(idItem)
    }

    return (
        
        <div className='new-item-task'>
            <div className={weekDay + "-time new-time"}>
                <p>{time.slice(0,2)+"h"+time.slice(3)+"m"}</p>
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