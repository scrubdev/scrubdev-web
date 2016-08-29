import Loading from "./component/loading.vue";
import Home from "./component/home.vue";
import Favorites from "./component/favorites.vue";

const routes = {
    "/": { name: "Loading", component: Loading },
    "/home": { name: "Home", component: Home },
    "/favorites": { name: "Favorites", component: Favorites }
};

export default routes;