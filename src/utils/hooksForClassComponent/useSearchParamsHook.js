import {useSearchParams} from "react-router-dom";
export const useSearchParamsHook = (queryParam) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return searchParams.get(queryParam)
}

export const withSearchParamsHOC = (Component) => {
    return (props) => {
        const resultHook = useSearchParamsHook("name")
        return <Component resultHook={resultHook} {...props} />
    }
}