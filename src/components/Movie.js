import React from 'react';

const Movie = ({poster_path, title, overview, vote_average, release_date}) => {
    const IMG_API = process.env.REACT_APP_IMG_API;
    
    const setVoteClass = (vote) => {
        if(vote >= 8) {
            return 'green'
        } else if(vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <div className='movie'>
                <img src={
                    poster_path 
                    ? (IMG_API +poster_path) 
                    : 'https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'} 
                    alt={title} />
                <div className='movie_info'>
                    <h4>{title}</h4>
                    <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
                <div className='over_movie'>
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                    <h4>{release_date}</h4>
                </div>
        </div>
    )
}

export default Movie
