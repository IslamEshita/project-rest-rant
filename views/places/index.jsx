const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6 restaurant">
        <h2 className='restaurantName'>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-left cuisine">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-left location">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
    
    return (
      <Def>
          <main>
              <div className="container">
                <h1>Places to Rant or Rave about</h1>
                <div className='row'>
                  {placesFormatted}
                </div>
              </div>              
          </main>
      </Def>
  )
  }

module.exports = index;