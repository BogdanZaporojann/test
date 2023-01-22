import style from "./Paginator.module.scss"
import "../../../index.css"
export const Paginator = (props) => {
    return(
        <div>
            <div className={style.paginators_container}>
                <span>1</span>
                <span>1</span>
                <span>1</span>
            </div>
            <hr/>
        </div>
    )
}