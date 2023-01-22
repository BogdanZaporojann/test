import indus from "../../../assets/img/indus/indian_picture.jpg"
import style from "./Answer.module.scss"
export const Answer = (props) => {
    return(
        <div>
            <div className={style.header}>Relevant answer</div>
            <div className={style.content}>
                <div className={style.answer__author__header}>
                    <img className={style.answer__author__header__image} src={indus} alt="indus"/>
                    <div className={style.answer__author__header__content}>
                        <div className={style.answer__author__header__name__date}>
                            <div>
                                <a href="app/src/QuestionPage/Answer#"><span>Michel Héry</span></a>
                            </div>
                            <div className={style.date__padding}>Nov 12, 2022</div>
                            <div></div>
                        </div>
                        <div className={style.ff}>
                            <span className={style.answer__author__header__button}>answer</span>
                        </div>
                    </div>
                </div>
                <div className={style.answer__header__main}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure, modi nisi provident quaerat suscipit. Dignissimos, distinctio, soluta? Ab blanditiis dolore esse est ex facilis labore natus porro quaerat voluptate? Ab adipisci deserunt expedita harum nihil nulla odio officiis provident sed tempore. Architecto, ex iste quas quis rem soluta velit voluptates? Aperiam consectetur consequatur fuga molestiae quaerat sint soluta! Ab autem beatae commodi cum enim eum ex facere, harum ipsa maxime minima nobis pariatur, perferendis qui quisquam reiciendis rem sequi sit sunt suscipit tenetur totam unde voluptas voluptatibus voluptatum. Ab assumenda dicta ea earum laudantium minus quas repellendus sapiente similique?
                </div>
                <div className={style.answer__author__footer}>
                    <div className={style.view}><span>View</span></div>
                    <div className={style.recommendation}><span>0 Recommendation</span></div>
                </div>
            </div>
        </div>

    )
}