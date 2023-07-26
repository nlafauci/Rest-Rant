const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = Math.round(sumRatings / data.place.comments.length)
          let stars = ''
          for (let i = 0; i < averageRating; i++) {
            stars += 'â­ï¸'
          }
          rating = (
            <h3>
              {stars} stars
            </h3>
          )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
    <Def>
        <main>
            <h1>{ data.place.name }</h1>
            <h3> Located in { data.place.city }, { data.place.state }</h3>
            <h2> Rating </h2>
            <h2> {rating} </h2>
            <p> Currently unrated </p>
        </main>
        <main>
            <h2> Description </h2>
            <h3> {data.place.showEstablished} </h3>
            <h4> Serving {data.place.cuisines} </h4>
        </main>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
        Edit
        </a>      
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
        <button type="submit" className="btn btn-danger">
        Delete
        </button>
        </form> 
        <main>
            <h2> Comments </h2>
            {comments}
        </main>
        <main>
        <h2> Rant About This Restaurant Here!</h2>
        <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="form-group">
                    <label htmlFor="content"> Content </label>
                    <textarea name="content" className="form-control"> </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="range" step="1" min="1" max="5" className="form-range" id="stars" name="stars" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">Rant</label>
                    <input className="form-check-input" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
        </main>
        </Def>
    )
}

module.exports = show
