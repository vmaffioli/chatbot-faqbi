import React, { Component } from 'react';
import api from '../Api';

class apiData extends Component{

    state= {
        testes: [],
    }

    async componentDidMount(){

        const response = await api.get('')

        this.setState({ testes: response.data});
        console.log(response.data)
    }





    render(){
        return(
        <>
        </>
        )
    }

}

export default apiData;
