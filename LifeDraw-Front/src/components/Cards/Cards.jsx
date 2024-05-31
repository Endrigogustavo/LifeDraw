
import './Cards.css'

import GenshinCaracter from './Cards/Genshin/PersoG.png'
import GenshinCard from './Cards/Genshin/CardG.jpeg'

import ChainsawCaracter from './Cards/Chainsaw/PersoG.png'
import ChainsawCard from './Cards/Chainsaw/CardG.jpg'

import Yor from './Cards/Spy-Family/spy.jpeg'
import YorCaracter from './Cards/Spy-Family/PersoS.png'


function Cards() {

  return (
    <>

      <br />
      <br />
      <center><h1>Principais</h1>
        <hr className="star-primary"></hr>
        <main className="page-content-card">

          <br />
          <br />
          <div class="flex-container">


            <div className="card-card">
              <div className="wrapper-card">
                <img src={GenshinCard} className="cover-image-card" />
              </div>

              <img src={GenshinCaracter} className="character-card" />
            </div>


            <div className="card-card">
              <div className="wrapper-card">
                <img src={ChainsawCard} className="cover-image-card" />
              </div>

              <img src={ChainsawCaracter} className="character-card" />
            </div>


            <div className="card-card">
              <div className="wrapper-card">
                <img src={Yor} className="cover-image-card" />
              </div>

              <img src={YorCaracter} className="character-card" />
            </div>


          </div>
        </main>
      </center>


    </>
  )
}

export default Cards