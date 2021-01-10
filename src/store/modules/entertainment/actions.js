
import axios from 'axios'

export default {

    GET_ITEMS: (context) => {

        const api = "/data/response.json";
        axios
            .get(api)
            .then(res => {
                context.commit('setItems', res.data.results);

            })
            .catch(arr => {

                // If api error print error
                context.commit('setarrApi', arr.response.statusText);
                console.log(arr.response.statusText)
            });
    },
    EDIT_ITEM: (context, payload) => {
        let edirApi = `/data/response.json/${payload}`;

        axios.put(edirApi)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

}

