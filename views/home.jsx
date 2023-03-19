const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div className='homeImage'><img src="/images/fruit_sandwich.jpg" alt="Fruit Sandwich" /></div>
              <div>
              Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              
  
          </main>
      </Def>
    )
  }
  

module.exports = home
