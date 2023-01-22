import style from "./Question.module.scss"
import indus from "../../../assets/img/indus/indian_picture.jpg"
import {Answer} from "../Answer/Answer";
export const Question = () => {
    return (
        <div className={style.stack__item}>
                <div className={style.stack__item__header}>
                    <div className={style.header__container}>
                        <div className={style.header__container_image}>
                            <img className={style.image} src={indus} alt="user"/>
                        </div>
                        <div className={style.header__container_content_wrapper}>
                            <div className={style.header__container_content}>
                                <div>Shuraik Kader</div>
                                <div className={style.header__container_content_text}>asked a question related to Engineering</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.main__container}>
                        <div className={style.main_header}>
                            Online based classroom (Zoom, MS teams, Webex and Google Meet etc.) - Is it an advantage or disadvantage?
                        </div>
                        <div className={style.main__button__flex}>
                            <span className={style.main__first_buttton}>Question</span>
                            <span className={style.main__second_buttton}>7 answers</span>
                            <span className={style.main__button__date}>Nov 11, 2022</span>
                        </div>
                        <div>
                            <div className={style.description}>
                                Hi! I‘m an industrial Engineering student ready to graduate. I only still have to write my final bachelor thesis which i would like to be about sustainability. Sustainability is a very important topic for everyone, especially for the industry.
                                Any topic or problem suggestions would be very helpful.
                                Thank you so much in advance.
                                Have great day!
                            </div>
                            <div className={style.answer}>
                                <Answer />
                            </div>
                        </div>
                    </div>
                <div>

                </div>
            </div>
            <hr/>
        </div>
    )
}