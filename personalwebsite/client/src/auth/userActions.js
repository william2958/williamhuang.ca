import axios from '../utils/axios';
import history from '../history';

export const checkUser = async () => {
    try {
        const response = (await axios.get('/auth/getAdmin', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })).data;
        if (response) {
            return response.user;
        } else {
            return null;
        }
    } catch (e) {
        history.push('/');
        // window.location.reload(false);
        console.error('error occurred when fetching the account: ', e);
    }
};
