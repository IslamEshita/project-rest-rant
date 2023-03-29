const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(comment => {
        return (
        <div className="border">
            <h2 className="rant">{comment.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{comment.content}</h4>
            <h3><strong>{comment.author}</strong></h3>
            <h4>Rating: {comment.stars}</h4>
        </div>
        )
      })
    }
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
                <p>{data.place.showEstablished()} and serving {data.place.cuisines} cuisine</p>
            </section>
            <section className='comments'>
                <h2>Comments</h2>
                {comments}
            </section>
            <section>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>     
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>    
            </section>            
          </main>
        </Def>
    )
}

module.exports = show
