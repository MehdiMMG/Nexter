import "../styles/main.scss"
import { FaHeart, FaMale, FaExpand} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import FirstHome from "../img/house-1.jpeg";
import SecondHouse from "../img/house-2.jpeg"
import ThridHouse from "../img/house-3.jpeg"
import FourthHouse from "../img/house-4.jpeg"
import FifthHouse from "../img/house-5.jpeg"
import SixthHouse from "../img/house-6.jpeg"

const Homes = () => {
  return (
    <section className="homes">
        <div className="home">
            <img src={FirstHome} alt="House 1" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>325 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
        <div className="home">
            <img src={SecondHouse} alt="House 2" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Modern Glass Villa</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>450 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$2,750,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
        <div className="home">
            <img src={ThridHouse} alt="House 3" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Cozy Country House</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>4 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>250 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$850,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
        <div className="home">
            <img src={FourthHouse} alt="House 4" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Large Rustical Villa</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>480 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$1,950,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
        <div className="home">
            <img src={FifthHouse} alt="House 5" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Majestic Palace House</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>18 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>4230 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$9,500,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
        <div className="home">
            <img src={SixthHouse} alt="House 6" className="home__img" />
            <FaHeart className="home__like"></FaHeart>
            <h5 className="home__name">Modern Family Apartment</h5>
            <div className="home__location">
              <FiMapPin></FiMapPin>
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <FaMale></FaMale>
              <p>3 rooms</p>
            </div>
            <div className="home__area">
              <FaExpand></FaExpand>
              <p>180 m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <IoKeyOutline></IoKeyOutline>
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">Contanct Realtor</button>
        </div>
    </section>
  )
}

export default Homes