const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    let rating = (
        <h3 className='inactive'>Not yet rated</h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, comment) => {
            return total + comment.stars
          }, 0);
          let averageRating = Math.round(sumRatings / data.place.comments.length);
          let stars = ''
          for(let i=1; i<=averageRating; i++) {
            stars += '⭐'
          }
          rating = (
            <h3>
              {stars} stars
            </h3>
          )
        comments = data.place.comments.map(comment => {
        return (
        <div className="individualComment border col-md-4">
            <h2 className={comment.rant ? 'rant' : 'rave'}>{comment.rant ? 'Rant! 😡' : 'Rave! 😄'}</h2>
            <h4 className='commentContent'>"{comment.content}"</h4>
            <h3 className='commentAuthor'>{comment.author}</h3>
            <h4 className='commentRating'>Rating: {comment.stars} stars</h4>

            <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
        </div>
        )
      })
    }
    return (
        <Def title={data.title}>
          <main className='col-lg-8 showMain'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} className='showImage'></img>
            <section>
                <div className="row">
                    <div className="col"> <a href={`/places/${data.place.id}/edit`} className="btn btn-warning float-right">Edit</a></div>
                    <div className="col">
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>  
                    </div>
                </div>
            </section>
            <section className='description'>                
                <h2>Description</h2>
                <p>{data.place.showEstablished()} and serves {data.place.cuisines} cuisine</p>
            </section>     
            <section className='rating'>
                <h2>Rating</h2>
                {rating}
            </section>           
            <section className='comments'>
                <h2>Comments</h2>
                <div className="row">
                {comments}
                </div>                
                <article className="newComment">
                    <h3>Got your own rant or rave?</h3>
                    <form method="POST" action={`/places/${data.place.id}/comment`}>                    
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="content">Comment</label>
                                <textarea className="form-control" id="content" name="content" rows="3" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="author">Author</label>
                                <input
                                className="form-control"
                                id="author"
                                name="author"
                                required
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="stars">Stars (between 1 and 5):</label>
                                <input
                                type="range"
                                id="stars"
                                name="stars"
                                min="1"
                                max="5"
                                step="0.5"
                                />
                            </div>
                            <div className="form-group col">
                                <input type="checkbox" id="rant" name="rant" value="rant" />
                                <label htmlFor="rant">Rant</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info">Add your comment</button>                    
                    </form>
                </article>
            </section>       
          </main>
        </Def>
    )
}

module.exports = show
