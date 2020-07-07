const initialState = {
    selectedCountry : "", 
    showChart : false
}

const countries = (state = initialState, action)=>{
    switch(action.type){
        case "GET_COUNTRY":
            return {...state, selectedCountry : action.payload.Slug , showChart : true};
        case "HIDE_CHART":
            return {...state, selectedCountry : action.payload , showChart : false};
        default : return {...state};
    }
}

export default countries;