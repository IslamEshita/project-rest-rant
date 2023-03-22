const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className='col-lg-8 showMain'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} className='showImage'></img>
            <section className='rating'>
                <h2>Rating</h2>
                <p>Not Rated</p>
            </section>
            <section className='description'>
                <h2>Description</h2>
                <p>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</p>
            </section>
            <section className='comments'>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </section>
          </main>
        </Def>
    )
}

module.exports = show
