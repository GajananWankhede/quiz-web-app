import React, { Component } from 'react';
import axios from 'axios';
import QuestionBox from './components/Box/QuestionBox'
import './QuizPage.css';
import Auxx from './Auxx/Auxx'
class QuizPage extends Component {
    state = {
        questions: [],
        selectedQuestionId: null,
        error: false
    }

    componentDidMount () {
        axios.get( `http://localhost:6101/question-services/getAll`)
            .then( response => {
                const questions = response.data;
                const updatedQuestions = questions.map(question => {
                    return {
                        ...question
                    }
                });
                this.setState({questions: updatedQuestions});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    questionSelectedHandler = (id) => {
        this.setState({selectedQuestionId: id});
    }

    render () {
        let questions = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            questions = this.state.questions.map(question => {
                return <QuestionBox 
                key={question.id}
                questionTitle = {question.questionTitle}
                optionOne = {question.optionOne}
                optionTwo = {question.optionTwo}
                optionThree = {question.optionThree}
                optionFour = {question.optionFour}
                correctAnswer = {question.correctAnswer}
                clicked={() => this.questionSelectedHandler(question.id)}
                />;
            });
        }
        return (  
                  <Auxx>
                   <div className="view-questions">
                          <section>
                          </section>
                          <section className="questions">
                              <div className="question-item">
                                    {questions}
                              </div>
                          </section>
                    </div>
                    </Auxx>
               );
    }
}

export default QuizPage;