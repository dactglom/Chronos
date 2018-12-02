import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {setDay} from "../../actions/dateActions";

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            value: 0
        };
        this.createList = this.createList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createList() {
        return [{value: 1, label: 1},
            {value: 2, label: 2},
            {value: 3, label: 3},
            {value: 4, label: 4},
            {value: 5, label: 5},
            {value: 6, label: 6},
            {value: 7, label: 7},
            {value: 8, label: 8},
            {value: 9, label: 9},
            {value: 10, label: 10},
            {value: 11, label: 11},
            {value: 12, label: 12},
            {value: 13, label: 13},
            {value: 14, label: 14},
            {value: 15, label: 15},
            {value: 16, label: 16},
            {value: 17, label: 17},
            {value: 18, label: 18},
            {value: 19, label: 19},
            {value: 20, label: 20},
            {value: 21, label: 21},
            {value: 22, label: 22},
            {value: 23, label: 23},
            {value: 24, label: 24},
            {value: 25, label: 25},
            {value: 26, label: 26},
            {value: 27, label: 27},
            {value: 28, label: 28},
            {value: 29, label: 29},
            {value: 30, label: 30},
            {value: 31, label: 31}
        ]

    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        let value = selectedOption.value;
        this.props.setDay(value);
    };

    render() {
        const {selectedOption} = this.state;
        return (
            <Select
                id={'selectDay'}
                value={selectedOption}
                onChange={this.handleChange}
                options={this.createList()}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        day: state.dateReducer.day,
        year: state.dateReducer.year,
        leap: state.dateReducer.leap
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDay: (day) => {
            dispatch(setDay(day))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);