const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <div>
            <img src="images/Cliff.jpg" alt="Cliff" />
            <div>
                Photo by <a href="https://unsplash.com/pt-br/@kylejeffreys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Johnson</a> on <a href="https://unsplash.com/photos/TEZZzuQTt8g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
      </Def>
    )
  }
  

module.exports = error404

