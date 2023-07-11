const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
          <div>
            <img src="images/Horizon.jpg" alt="Horizon" />
            <div>
              Photo by <a href="https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohamed Nohassi</a> on <a href="https://unsplash.com/photos/odxB5oIG_iA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
          <a href="/places">
              <button className="btn-primary">Places Page</button>
          </a>
      </Def>
      
    )
  }
  

module.exports = home
