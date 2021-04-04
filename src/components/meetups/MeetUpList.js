import React from 'react'
import MeetUpItem from './MeetUpItem' 
import classes  from './MeetUpList.module.css'

const MeetUpList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => 
            <MeetUpItem 
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.desciption}
            />
            )}
        </ul>
    )
}

export default MeetUpList