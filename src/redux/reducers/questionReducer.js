const SET_QUESTION = 'SET_QUESTION'



const initialState = {
    questionsData: [],
    // totalItemsCount: 9,
    // itemsCount: 2,
    questionPage:1
}

export const questionReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_QUESTION:
            return {
                ...state,
                questionsData: action.questions,
            }
        default:
            return state
    }
}

const setQuestionsSuccessAC = (questions) => ({
    type: SET_QUESTION,
    questions
})

export const setQuestionsSuccessDispatch = (questions) => {
    return (dispatch) => {
        dispatch(setQuestionsSuccessAC(questions))
    }
}
