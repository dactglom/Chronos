export function setDay(day){
    return { type: 'SET_DAY', day: day }
}

export function setMonth(month){
    return { type: 'SET_MONTH', month: month }
}

export function setYear(year){
    return { type: 'SET_YEAR', year: year }
}

export function identifyLeap(leap){
    return { type: 'IDENTIFY_LEAP', leap: leap }
}