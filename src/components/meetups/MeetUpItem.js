import React, { useContext } from 'react'
import FavoriteContext from '../../store/favorite-context'
import Card from '../ui/Card'

import classes from "./MeetUpItem.module.css"

const MeetUpItem = (props) => {

    const favoriteCtx = useContext(FavoriteContext)

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id : props.id,
                title: props.title,
                description: props.description, 
                image: props.image,
                address: props.address
            })
        }
    }

    return (
       
        <li className={classes.item}>
            <Card>
                <div>
                    <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                        <button 
                        className={classes.actions}
                        onClick={toggleFavoriteStatusHandler}
                        >{itemIsFavorite? "Remove favorite" : "Add to favorite"}</button>
                    </div>
                </div>
            </Card>
        </li>

    )
}

export default MeetUpItem
