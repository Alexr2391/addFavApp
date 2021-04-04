import React, {useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = e => {
        e.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData)
    }

    

    return (
        <Card>
            <form 
            className={classes.form}
            onSubmit={submitHandler}
            >
                <div className={classes.control}>
                    <label htmlFor="title" >Meetup Title</label>
                    <input ref={titleInputRef} required type="text" id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image" >Meetup Image</label>
                    <input ref={imageInputRef} required type="url" id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address" >Address</label>
                    <input ref={addressInputRef} required type="text" id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description" >Description</label>
                    <textarea ref={descriptionInputRef} style={{resize: 'none'}} required type="text" id="description" rows="5s"/>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
