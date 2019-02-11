import axios from 'axios';

export default baseUrl => {
    const axiosCreator = method => (yourUrl,body,headers) => axios({
        method,
        url: `${baseUrl}/${yourUrl}`,
        data: body,
        headers
    }).then(response => response.data);

    return {
        post: axiosCreator('post'),
        get: axiosCreator('get')
    }
}