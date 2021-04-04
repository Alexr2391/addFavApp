import React, {useState, useEffect} from 'react'
import MeetUpList from '../components/meetups/MeetUpList'

const AllMeetups = () => {
  const [isLoading, setIsLoading] =  useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {

  setIsLoading(true)
  
  fetch('https://react-course-b30ce-default-rtdb.firebaseio.com/meetups.json')
  .then(response => {
    return response.json()
  })
  .then((data) => {
    const meetups = []

    for(const key in data) {
      const meetup = {
        id : key,
        ...data[key]
      }
      meetups.push(meetup)
    }
      setIsLoading(false)
      setLoadedMeetups(meetups)
  })

}, [])

  if(isLoading) {
    return (
      <section>
          <p>...Loading</p>
      </section>
    )
  }

    return (
        <div>
            <h1>All Meet ups pages</h1>
            <MeetUpList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetups
