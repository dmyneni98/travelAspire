import "./feedbackform.css";
import React, { useState } from "react";




function FeedbackForm(){
    const [number, setNumber] = useState(0);

  
    return (

        <div class="feedback">
        <div class="feedbackContainer">
            <div >
                <div class="title"> Thanks for visiting Trip Aspire! We hope you had a great time 
                    and would live your feedback, so please tell us: </div>
                
                <div>  How satisfied were you with our website? </div>
                
         
            </div>
            <form action="">
                 <div class="rating">
                    <div className="ratingItem">
                        
                        <div className="ratingOption">
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(1)}
                            >
                            1
                            </button>

                            <button
                            className="ratingButton"
                            onClick={() => setNumber(2)}
                            >
                            2    
                            </button>

                            <button
                            className="ratingButton"
                            onClick={() => setNumber(3)}
                            >
                            3
                            </button>

                            <button
                            className="ratingButton"
                            onClick={() => setNumber(4)}
                            >
                            4
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(5)}
                            >
                            5
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(6)}
                            >
                            6
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(7)}
                            >
                            7
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(8)}
                            >
                            8
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(9)}
                            >
                            9
                            </button>
                            <button
                            className="ratingButton"
                            onClick={() => setNumber(10)}
                            >
                            10
                            </button>

                        </div>
                        <div class="explain">
                            <div className="explanContent">Not likely</div>
                            <div className="explanContent">Very likely</div>
                        </div>

                    </div>

              
                </div>

                <div class="commentbox">
                    <textarea className="comment" name ="comment" placeholder="Let us know why you feel this way (optional)">
                    </textarea>
                    <input className="feedback-submit" type="submit" value="Submit"/>
                </div>

                
            </form>


        </div>   
    </div>

    )

}

export default FeedbackForm