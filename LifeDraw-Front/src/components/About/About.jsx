import ImgAbout from '../../assets/About/hinata-card.jpg'
import './About.css'

function About() {

    return (
        <>
<center>
<div class="card-about">
  <img src={ImgAbout} class="card__image" alt="brown couch" />
  <div class="card__content">
    <time datetime="2021-03-30" class="card__date">Novidades</time>
    <span class="card__title">Novidades do mundo da arte</span>
  </div>
</div>
</center>       
        </>
    )
}

export default About