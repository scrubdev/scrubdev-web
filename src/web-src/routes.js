import Loading from "./component/loading.vue";
import Home from "./component/home.vue";
import Favorites from "./component/favorites.vue";
import Settings from "./component/settings.vue";

const routes = {
    "/": { name: "Loading", component: Loading },
    "/home": { name: "Home", component: Home },
    "/favorites": { name: "Favorites", component: Favorites },
    "/settings": { name: "Settings", component: Settings }
};

export default routes;