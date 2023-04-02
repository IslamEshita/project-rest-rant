const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <h2>A cool restaurant review app</h2>
              <div className="container home">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div className='homeImage'><img src="/images/cool_restaurant.jpg" alt="Cool Restaurant" /></div>                    
                  </div>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
