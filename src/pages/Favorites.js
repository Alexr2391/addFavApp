import React, {useContext} from 'react'
import FavoriteContext from '../store/favorite-context'
import MeetUpList from '../components/meetups/MeetUpList'

const Favorites = () => {

    const favoriteCtx = useContext(FavoriteContext)

    let content;

    if(favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favorite, let's add some</p>
    } 
    else {
        content = <MeetUpList meetups={favoriteCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites
