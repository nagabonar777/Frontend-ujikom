import { createStore } from "vuex";
import auth from "./modules/auth" 
import user from "./modules/user";
 const store = createStore({
    
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        user
    },
});

export default store;