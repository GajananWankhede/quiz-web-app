import React from 'react';

import './QuestionBox.css';

const QuestionBox = (props) => (
    <article className="question" onClick={props.clicked}>
        <h5>Question Title:{props.questionTitle}</h5>
        <h5>optionOne Address:{props.optionOne}</h5>
        <h5>optionTwo Type:{props.optionTwo}</h5>
        <h5>optionThree Area:{props.optionThree}</h5>
        <h5>optionFour Type:{props.optionFour}</h5>
        <h5>correctAnswer Area:{props.correctAnswer}</h5>
    </article>
);

export default QuestionBox;