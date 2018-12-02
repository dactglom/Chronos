import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {setMonth} from "../../actions/dateActions";

const options = [
    {value: 1, label: 'February'},
    {value: 2, label: 'March'},
    {value: 3, label: 'April'},
    {value: 4, label: 'May'},
    {value: 5, label: 'June'},
    {value: 6, label: 'July'},
    {value: 7, label: 'August'},
    {value: 8, label: 'September'},
    {value: 9, label: 'October'},
    {value: 10, label: 'November'},
    {value: 11, label: 'December'},
    {value: 12, label: 'January'}
];

class Month extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null
        }
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        let value = selectedOption.value;
        this.props.setMonth(value);
    };
    render(){
        const {selectedOption} = this.state;
        return (
            <Select
                id={"selectMonth"}
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        day: state.dateReducer.day
    }
}

function mapDispatchToProps(dispatch){
    return {
        setMonth: (month) => {
            dispatch(setMonth(month))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);