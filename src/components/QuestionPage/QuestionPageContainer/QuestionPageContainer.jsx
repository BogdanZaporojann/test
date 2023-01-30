import React, {Component} from "react";
import {getQuestions} from "../../../api/axios/axios";
import {QuestionPage} from "../QuestionPage";
import {connect} from "react-redux";
import {
    setQuestionsSuccessDispatch
} from "../../../redux/reducers/questionReducer";
import {compose} from "redux";
import {withSearchParamsHOC} from "../../../utils/hooksForClassComponent/useSearchParamsHook";
export class QuestionPageContainer extends Component {



    constructor(props) {
        super(props);
        this.state={
            currentPage: 1,
            itemsCount: 2
        }

    }





    async componentDidMount() {
        const response = await getQuestions("Engineer",2,2)
        this.props.setQuestionsSuccessDispatch(response.data);
    }

    componentDidUpdate (prevProps, prevState, snapshot) {

    }


    render() {
        console.log(this.props)
       return(
            <div>
                <QuestionPage handleChange={this.handleChange} questions={this.props.questions}  />
            </div>
        )
        }
}
const mapStateToProps = (state)=>({
    questions: state.questions.questionsData,
})

export default compose(
    withSearchParamsHOC,
    connect(mapStateToProps,{setQuestionsSuccessDispatch})
)(QuestionPageContainer)
