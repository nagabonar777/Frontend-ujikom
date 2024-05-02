import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
    dataAddress: [],
    role: localStorage.getItem('role') || ''
  },
  getters: {
    isAuthenticated: (state) =>!!state.token,
    getAddress: (state) => state.dataAddress,
    loginError: (state) => state.loginError,
    role: (state) => state.role
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/v1/login',
          credentials
        );
    
        if (response.data.user) {
          const token = response.data.token;
          const role = response.data.user.result.role;
    
          // Simpan token dan role ke localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
    
          commit('SET_TOKEN', token);
          commit('SET_ROLE', role);
          commit('SET_LOGIN_ERROR', null);
          console.log("Token disimpan:", token);
          return true;
        } 
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Login Gagal";
        commit("SET_LOGIN_ERROR", errorMessage);
        console.error(error);
        return false;
      }
    },
    async signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/v1/register',
          credentials
        );
        const token = response.data.token;
        const role = response.data.role;

        // Simpan token dan role ke localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        commit('SET_TOKEN', token);
        commit('SET_ROLE', role);
        commit('SET_LOGIN_ERROR',null);
        console.log("Token disimpan:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Registrasi Gagal";
        commit("SET_LOGIN_ERROR",errorMessage);
        console.error(error);
        return false;
      }
    },

    async getUserAddress({state, commit}){
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          } 
        );
        commit('SET_ADDRESS', response.data)
        console.log(response);
        return response.data;
      }catch (error){
        console.error(error)
        return null;
      }
    },
    
    logout({ commit }) {
      // Hapus token dan role dari localStorage
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      commit('SET_TOKEN', '');
      commit('SET_ROLE', '');
      //   Log Token dihapus
      console.log('Token dihapus:', token);
      window.location = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_LOGIN_ERROR(state,error){
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.dataAddress = address
    }
  },
};
export default auth;