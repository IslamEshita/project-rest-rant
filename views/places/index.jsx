const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-4 restaurant">
        <div className='restaurantName'>
          <a className='restaurantLink' href={`/places/${place.id}`} >
            {place.name}
          </a>
        </div>
        <p className="text-left cuisine">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <div className="restuarantLocation">
          Located in {place.city}, {place.state}
        </div>
      </div>
    )
  })
    
    return (
      <Def title={data.title}>
          <main>
              <div className="container">
                <h1 className='indexHeader'>Places to Rant or Rave About</h1>
                <div className='row'>
                  {placesFormatted}
                </div>
              </div>              
          </main>
      </Def>
  )
  }

module.exports = index;