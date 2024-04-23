import "../styles/main.scss"
import {Pic1, Pic2, Pic3, Pic4, Pic5, Pic6,
Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic14} from "../img/index"

const Gallery = () => {
  return (
    <section className="gallery">
        <figure className="gallery__item gallery__item--1"><img src={Pic1} alt="Gallery Image 1" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--2"><img src={Pic2} alt="Gallery Image 2" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--3"><img src={Pic3} alt="Gallery Image 3" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--4"><img src={Pic4} alt="Gallery Image 4" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--5"><img src={Pic5} alt="Gallery Image 5" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--6"><img src={Pic6} alt="Gallery Image 6" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--7"><img src={Pic7} alt="Gallery Image 7" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--8"><img src={Pic8} alt="Gallery Image 8" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--9"><img src={Pic9} alt="Gallery Image 9" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--10"><img src={Pic10} alt="Gallery Image 10" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--11"><img src={Pic11} alt="Gallery Image 11" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--12"><img src={Pic12} alt="Gallery Image 12" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--13"><img src={Pic13} alt="Gallery Image 13" className="gallery__img" /></figure>
        <figure className="gallery__item gallery__item--14"><img src={Pic14} alt="Gallery Image 14" className="gallery__img" /></figure>
    </section>
  )
}

export default Gallery;