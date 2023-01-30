import {Paginator} from "./Paginator/Paginator";
import {Question} from "./Question/Question";
import {MicroProfile} from "../common/MicroProfile/MicroProfile";
import classNames from "classnames";
import style from "./QuestionPage.module.scss";

export const  QuestionPage = (props) => {

    const { comments, totalItemsCount} = props.questions;

    const container = classNames(style.flex,style.common)




    return(
            <div>
                {/*<TopicHeader />*/}
                <div className={container}>
                    <div className="containerGeneral">
                        <Paginator totalItemsCount={totalItemsCount} />
                        {comments?.map(item=> <Question items={item}  />)}

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