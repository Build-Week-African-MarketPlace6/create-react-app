import axios from 'axios';

export const axiosWithAuth = () => {

    const token = localStorage.getItem( "token" );

    return axios.create({
        baseURL: "https://marketplacelambda.herokuapp.com/api/owner/${localStorage.getItem('user_id')}/items",
        headers: {
            Authorization: token
        }
    })
} 

export default axiosWithAuth;