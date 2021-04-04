import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorite-context'
import classes from './MainNavigations.module.css'

const MainNavigation = () => {

    const favoritesCtx = useContext(FavoritesContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </li>
            </ul>
        </header>
    )
}

export default MainNavigation
