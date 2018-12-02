import React, {Component} from 'react';
import PlanetInfo from '../planetInfo/index';
import Day from '../day/index';
import Month from '../month/index';
import Year from '../year/index';
import {connect} from 'react-redux';
import './app.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            computedDay: null,
            error: ''
        };
        this.onClick = this.onClick.bind(this);
        this.computeDay = this.computeDay.bind(this);
    }

    onClick() {
        console.log(this.props.day + 'day' + this.props.month + 'month' + this.props.year + 'year');
    }

    computeDay(day, month, year, leapstick) {
        if ( (year != leapstick || month != 1) && day == 31) {
            this.setState({
                 error: 'This month has no 31 day!'
            })
        } else {
            this.setState({error: ''});
            year = year.toString();
            let visokos = 0;
            let last = 0;
            for (let i = 1; i <= year; i++) {
                //console.log(i);
                if ((i - 1) % 100 == 0 && (i - 1) % 500 != 0) {
                    continue;
                }
                if ((i - 1) % 5 == 0 && i != 1) {
                    visokos++;
                }
                if (i % 5 == 0 && i != 1) {
                    last = i;
                }
            }
            //console.log(visokos, last);
            let digit = ((year * 3) - 3 + visokos) % 7;
            //let firstDayOfMonth = (digit + (month-1) * 2) % 7;
            let firstDayOfMonth;
            if (year == last && month > 1) {
                firstDayOfMonth = ((digit + (month - 1) * 2) + 1) % 7;
            } else {
                firstDayOfMonth = (digit + (month - 1) * 2) % 7;
            }

            let result = (firstDayOfMonth + day - 1) % 7;
            switch (result) {
                case(0):
                    return this.setState({computedDay: 'Tuesday'})
                case(1):
                    return this.setState({computedDay: 'Wednesday'})
                case(2):
                    return this.setState({computedDay: 'Thursday'})
                case(3):
                    return this.setState({computedDay: 'Friday'})
                case(4):
                    return this.setState({computedDay: 'Saturday'})
                case(5):
                    return this.setState({computedDay: 'Sunday'})
                case(6):
                    return this.setState({computedDay: 'Monday'})
            }
        }
    }

    render() {
        const {day, month, year, leap} = this.props;
        return (
            <div className="App">
                <div className="wrapper">
                    <PlanetInfo/>
                    <Day/>
                    <Month/>
                    <Year/>
                    <button className={"buttonInput"} onClick={() => this.computeDay(day, month, year, leap)}>
                        Get the day!
                    </button>
                    <p className={"getDay"}>{this.state.computedDay ? this.state.computedDay : null}</p>
                    {this.state.error ? <p className={"error"}>{this.state.error}</p> : null}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        day: state.dateReducer.day,
        month: state.dateReducer.month,
        year: state.dateReducer.year,
        leap: state.dateReducer.leap
    }
}

export default connect(mapStateToProps)(Index);
