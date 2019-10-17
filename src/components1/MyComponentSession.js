
import React, { Component } from 'react'
import './mystyle.css'
import './Recorder.js'
class MyComponentSession extends React.Component {
    render() {
        return (
<div>
    <link href="https://fonts.googleapis.com/css?family=Alegreya&display=swap" rel="stylesheet" />        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet"
        type="text/css"
        href="./mystyle.css" />
    <script src="https://gist.github.com/prof3ssorSt3v3/48621be79794a8a3adeed7971786d4d8.js"></script>
  
    <div class="box yellow-box-partI">
        <h4 class="box blue-box">Session-part-II></h4>
        <h3 class="purp-text">Speak To Each Other</h3>
        <h3 class="box red-box">
            <a href="https://mediator-papu.000webhostapp.com/Mediator%20papoo%20page%202.html">
                <img class="centerpic smaller-image thick-green-border purp-text" img src="http://consultingguru.com/wp-content/uploads/2011/08/Guru.png" alt="Papo." />
            </a>
        </h3>
    </div>    
        <div class="box blue-box2">
            <div class="box red-box3">
                <h2 class="text-left">The Speaker</h2>
                <h2 class="text-center">the matter</h2>
                <h2 class="text-right">The Listiner</h2>
            </div>
        </div>

        <div class="box" id="box-container">
            <div class="box" id="box-1">
                <h3 class="fontbox backgrounddarker"> Please wait for listener to indicate he is listening
                </h3>   
                    <img class="centerpic thick-black-border image-place1 center smaller-image thick-green-border purp-text" img src="http://www.toacanada.com/shop/images/detailed/1/dm1300_pn1e.jpg" alt="mic." />
                    
                    <img class="centerpic thick-black-border image-place1 center very-smaller-image thick-green-border purp-text" img src="https://mediator-papu.000webhostapp.com/800px-Traffic_light-yellow.png"
                    alt="yellowtrafficlight." />        
            </div>
            <div class="box" id="box-2">
                <div>
                    <h3 class="backgrounddarker fontbox sentenceshorter">Click the ear, when you are ready to listen.</h3>
                    <h3 class="fontbox sentenceshorter" style={{ color: 'black' }}>START RECORDING</h3>
                    <p><button id="btnStart" class="earcard"></button><br/>
                    <h3 class="fontbox sentenceshorter" style={{ color: 'black' }}>STOP RECORDING</h3>
        <button id="btnStop" class="earcard2"></button></p>
        
        <video controls></video>
        
                </div>
                <a href="./pappoo%20the%20mediator%20page%204.1.html">
                    
                </a>
            </div>
        </div>
            <div class="box" id="box-container3">
            <a href="https://mediator-papu.000webhostapp.com/" />
            <img class="hover2 thick-black-border2 image-place2 center smaller-image-handshake purp-text" img src="https://i.imgur.com/yt1H6RH.jpg" alt="shake." />
            </div>   
            <video id="vid2" class="centerpic" controls></video>

</div>);
    }
}

// class MyComponent extends React.Component 
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       // change code below this line

//       return(
//         <h1>
//         Hello React!
//         </h1> 
//       )


//       // change code above this line
//     }

;
export default MyComponentSession;