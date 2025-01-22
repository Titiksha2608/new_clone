
export const API_KEY = 'AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU'

//convert to commas thing we can dio here

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}