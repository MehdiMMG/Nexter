import "../styles/main.scss"
import { AiOutlineGlobal } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { IoLockClosedOutline } from "react-icons/io5";


const Features = () => {
  return (
    <section className="features">
        <div className="feature">
          <AiOutlineGlobal className="feature__icon"></AiOutlineGlobal>
          <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
          <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <CiTrophy className="feature__icon"></CiTrophy>
          <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
          <p className="feature__text">Voluptatum mollitia quae.
          Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
        </div>
        <div className="feature">
          <FiMapPin className="feature__icon"></FiMapPin>
          <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
          <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem 
          consequatur harum.</p>
        </div>
        <div className="feature">
          <IoKeyOutline className="feature__icon"></IoKeyOutline>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="feature">
          <HiOutlinePresentationChartLine className="feature__icon"></HiOutlinePresentationChartLine>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae.
          Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <IoLockClosedOutline className="feature__icon"></IoLockClosedOutline>
          <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
          <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, 
          voluptatum mollitia quae.</p>
        </div>
    </section>
  )
}

export default Features