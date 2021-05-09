import React,{Component} from 'react';

import './page.css';

class New extends Component{

    render(){
        return(
            <div className="row flex-nowrap flex-sm-wrap">
            <div className="col-8 col-md-3 m-1">
                <div className="card bg1">
                    <h9>WORRIES</h9>
                    <div className="card1">
                        <title id="design3">Idea-1</title>
                        <p className="para1">Hero section to be improved based on the new feedback</p>
                        <div className="container">
                            <p>EDIT</p>
                            <p>COPY</p>
                            <p>DELETE</p>
                        </div>
                    </div>
                    <div className="container py-2">
                        <div className="card-deck">
                            <div className="card4">
                                <title id="design3">YOLO</title>
                                <p className="para1">Add one more type of chart to left hand.hiiiiiiiiiiiiiiiiiiiiiiiii</p>
                            </div>
                        </div>
                    </div>
                    <div className="container py-2">
                        <div className="card-deck">
                            <div className="card4">
                                <title id="design3">YOLO</title>
                                <p className="para1">Add one more type of chart to left hand.hiiiiiiiiiiiiiiiiiiiiiiiii</p>
                            </div>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="container">
                            <i className="fas fa-plus-square">Add another task</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8 col-md-3 m-1">
                <div className="card bg2">
                <h9>TO DO</h9>
                        <i className="far fa-clipboard" id="ic"></i>
                        <br />
                        <div className="card1">
                            <title id="design2">Idea-1</title>
                            <p className="para1">
                                Hero section to be improved based on the new feedback.
                                ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="container py-2">
                            <div className="card-deck">
                                <div className="card4">
                                    <title id="design2">YOLO</title>
                                    <p className="para1">Add one more type of chart to left hand.hiiiiiiiiiiiiiiiiiiiiiiiii</p>
                                </div>
                            </div>
                        </div>
                        <div className="container py-2">
                            <div className="card-deck">
                                <div className="card4">
                                    <title id="design2">YOLO</title>
                                    <p className="para1">Add one more type of chart to left hand.hiiiiiiiiiiiiiiiiiiiiiiiii</p>
                                </div>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="container">
                                <i className="fas fa-plus-square">Add another task</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-3 m-1">
                    <div className="card bg3">
                        <h9>FINISHED</h9>
                        <i className="fas fa-check-circle" id="ic1"></i>
                        <br />
                        <div className="card1">
                            <title id="design1">Idea-1</title>
                            <p className="para1">Hero section to be improved based on the new feedback</p>
                        </div>
                        <div className="container py-2">
                            <div className="card-deck">
                                <div className="card4">
                                    <title id="design1">YOLO</title>
                                    <p className="para1">
                                        Add one more type of chart to left hand.
                                        hiiiiiiiiiiiiiiiiiiiiiiiii
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="container">
                                <i className="fas fa-plus-square">Add another task</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-2 m-1">
                    <div className="card last">
                        <h9 className="head">MORE...</h9>
                        <div className="card3 ">
                            <div className="container">
                                <i className="fas fa-plus-square">Add another task</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default New;
