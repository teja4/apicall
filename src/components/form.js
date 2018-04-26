import React, { Component } from 'react';
import axios from 'axios';


import { fetchData, fetchSuccess, fetchError } from '../actions/fectchData';
class Form extends Component {
    constructor() {
        super();

        this.fetchHandler = this.fetchHandler.bind(this)
    }
    fetchHandler(ev) {
        const { dispatch } = this.props;
        dispatch(fetchData());
        axios.get(this.urltext.value)
            .then(function (response) {
                dispatch(fetchSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(fetchError(error.message));
            });
    }
    render() {

        return (
            <div>
                <form>
                    <input type='text'
                        ref={(node) => {
                            this.urltext = node
                        }} />
                    <input type='button' value='user info..' onClick={this.fetchHandler} />
                </form>
            </div>
        );
    }
}

export default Form;


/* store 
  userData{}
  fetching:false
  error"""
actions:fetching,
fetchsucess,
fetcherror
*/