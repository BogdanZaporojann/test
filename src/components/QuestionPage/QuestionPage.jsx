import {TopicHeader} from "../common/TopicHeader/TopicHeader";
import {QuestionHeader} from "./QuestionHeader/QuestionHeader";
import {Paginator} from "./Paginator/Paginator";
import {Question} from "./Question/Question";
import {MicroProfile} from "../common/MicroProfile/MicroProfile";
import classNames from "classnames";
import style from "./QuestionPage.module.scss";

export const QuestionPage = (props) => {
    const container = classNames(style.flex,style.common)

    return(
            <div>
                {/*<TopicHeader />*/}
                <div className={container}>
                    <div className="containerGeneral">
                        <QuestionHeader />
                        <Paginator />
                        <Question />
                        <Question />
                    </div>
                    <div>
                        <MicroProfile />
                        <MicroProfile />
                        <MicroProfile />
                        <MicroProfile />
                    </div>
                </div>
            </div>
    )
}