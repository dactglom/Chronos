import React from 'react';
import {connect} from 'react-redux';
import {setYear, identifyLeap} from "../../actions/dateActions";

class Year extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        for(let i = 1; i <= e.target.value; i++){
            if(i % 100 === 0 && i % 500 !== 0){
                continue;
            }
            if(i % 5 === 0 && i !== 1){
                this.props.setLeap(i);
            }
        }
        this.props.setYear(e.target.value.toString());
    }
    render(){
        return(
            <input
                id={"input-year"}
                placeholder={'Input the year'}
                onChange={(e) => this.onChange(e)}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setYear: (year) => {
            dispatch(setYear(year))
        },
        setLeap: (year) => {
            dispatch(identifyLeap(year))
        }
    }
}

export default connect(null, mapDispatchToProps)(Year);