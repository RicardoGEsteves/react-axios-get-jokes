import axios from 'axios';

const url = 'https://api.chucknorris.io';
export const fetchJokes = async () => {
    try {
        const res = await axios.get(`${url}/jokes/search?query=animals`);
        // console.log(res);
        return res.data.result;
    } catch (err) {
        console.log(err);
    }

    // axios
    //     .get(`${url}/jokes/search?query=animals`)
    //     .then(function(response) {
    //         // handle success
    //         // console.log(response.data.result);

    //         return response.data.result;
    //     })
    //     .catch(function(error) {
    //         // handle error
    //         console.log(error);
    //     });
    // // .then(function() {
    // //     // always executed
    // // });
};
