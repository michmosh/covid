export const getCountryData = (country)=>{
    return {
        type : "GET_COUNTRY" , 
        payload : country
    }
}

export const hideChart = ()=>{
    return {
        type:"HIDE_CHART",
        payload:''
    }
}