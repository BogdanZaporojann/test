import style from "./Paginator.module.scss"
import "../../../index.css"
import {useSearchParams} from "react-router-dom";
export const Paginator = ({clbk, totalItemsCount}) => {



    const [searchParams, setSearchParams] = useSearchParams();


    const computeNumberOfPage = () => {
        const portion = searchParams.get('itemsCount')
        const pageNumbers = Math.ceil(totalItemsCount/portion);
        return pageNumbers
    }



        const paginatorArr = []
        for(let i=1; i<=computeNumberOfPage(); i++){
            paginatorArr.push(i)
        }


    return(
        <div>
            <div className={style.paginators_container}>
                    {paginatorArr.map(item=>{
                        return <span onClick={(e)=>clbk({a:5})}>{item}</span>
                    })}
            </div>
            <hr/>
        </div>
    )
}