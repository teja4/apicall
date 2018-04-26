import React, { Component } from 'react';


class Display extends Component {
    render() {
        console.log(this.props.data);
        return (

            <div>
                {(this.props.fetch) ? <h1>fetching data</h1> :
                    <div>
                        <h1>fetch data here</h1>
                        <p>
                            <strong>Name :{this.props.data.name}</strong>
                        </p>
                        <p>
                            <strong>Bio :{this.props.data.bio} </strong>
                        </p>
                        <p>
                            <strong>Locations : {this.props.data.location}</strong>
                        </p>
                    </div>
                }

            </div>
        );
    }
}

export default Display;


/* store 
  userData{}
  fetching:false
  error"""
actions:fetching,
fetchsucess,
fetcherror
*/