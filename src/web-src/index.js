import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

// DRAWER
import IScroll from "iscroll";
import $ from "jquery";
import "jquery-drawer";

// STYLES
import "./vendor/skeleton-2.0.4/normalize.css";
import "./vendor/skeleton-2.0.4/skeleton.css";
import "jquery-drawer/dist/css/drawer.min.css";
import "./stylesheet/style.css";

// VUE ROUTER
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueResource);

const App = Vue.extend({
    methods: {
        hidedrawer: function() {
            $(".drawer").drawer("close");
        }
    }
});

const Router = new VueRouter({});
Router.map(routes);

Router.start(App, "body");

const drawer = $(".drawer");
drawer.drawer();