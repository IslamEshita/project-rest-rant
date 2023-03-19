const React = require('react')
const Def = require('./default')

function error404() {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <h2>Ooops, sorry we can't find this page!</h2>
              <div className='pageNotFound'><img src="/images/page_not_found.jpg" alt="Page Not Found (Dog with glasses)" /></div>
              <div>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a> on <a href="https://unsplash.com/images/feelings/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>                            
          </main>
      </Def>
    )
  }
  

module.exports = error404;
