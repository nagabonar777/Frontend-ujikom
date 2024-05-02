import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters:{
        getUser: (state) => state.userData,
    },
    actions: {
        async getUserInfo({ commit }) {
            try {
                const data = await axios.get('http://localhost:8000/api/v1/user/info',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                );
                console.log(data.data)
                commit("SET_USER", data.data['data']);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    },
},
 mutations: {
    SET_USER(state, user) {
        state.userData = user;
    },
 },
};
export default user;