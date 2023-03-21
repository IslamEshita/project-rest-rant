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
                    <div className='homeImage'><img src="/images/fruit_sandwich.jpg" alt="Fruit Sandwich" /></div>
                    <div>
                    Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                    <a href="/places/" className="restaurantLink text-right">Restaurants</a>
                  </div>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
