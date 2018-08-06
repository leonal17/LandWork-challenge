import React from 'react';
import Header from './_header';
import Footer from './_footer';


export default class ShowResult extends React.Component {

    //create state
    state = {
        data: [],
        showdata:true
    }

    //Function for process data
    handleData = () =>{

        //this function return the data
        let fnGetData = () =>{
            
            //Array where the data will be inserted
            let arr = [];

            //Generete 10,000 numbers
            for(let i=1; i<=10000; i++){

                //Add each number to array
                arr.push(i);
            }
            //Return an array of the numbers without order
            return arr.sort((a,b) =>  (Math.random()-0.5));   
        };
        //Check if state.data is empty: if empty call fnGetData else just change the order of the numbers
        this.state.data.length > 1 ? this.setState((prevState)=>({ data: prevState.data.sort((a,b) =>  (Math.random()-0.5)) })) : this.setState(()=>({ data: fnGetData() }));
        
        //Show the container with the data
        this.setState(()=>({ showdata: false }));
    }; 
    

    //Render data to html
    render = () => {

        //Solucion code as string
        const solution = `

        //this function return the data
        let fnGetData = () =>{

            //array where the data will be inserted
            let arr = [];

            //generete 10,000 numbers
            for(let i=1; i<=10000; i++){

                //add each number to array
                arr.push(i);
            
            };

            // return an array of the numbers without order
            return arr.sort((a,b) => (Math.random()-0.5)); 
        };
        
        `;

        // Html that will be rendered
        return (
            //Element principal
            <div className="container">

                {/* Header Component*/}
                <Header />

                <div className="btn-generate">
                    {/* Button that generate data*/}
                    <button 
                        className="big-button"
                        onClick={this.handleData}
                    >
                        Generate
                    </button>
                </div> 

                {/* container where the data will be show */}
                <div className="container-data" hidden={this.state.showdata}>
                    
                    {/* Read the data from the state and show it separated by ',' */}
                    <p>{this.state.data.map((num, i) =>  (i<9999 ? num+',': num))}</p>

                </div>

                <h2>Solution</h2>
                {/* container where the code will be show */}
                <div className="solution-container">
                    <pre>
                        <code className="code">{solution}</code>
                    </pre>

                    
                </div>
                <p className="path-line">See the this code in the follow path Task-LandWorks/src/components/ShowResult.js line 14</p>
                <div className="footer-widget">
                    <Footer/>
                </div>
            </div>
        );
    };
}