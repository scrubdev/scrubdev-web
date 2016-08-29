import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import IScroll from "iscroll";
import $ from "jquery";
import "jquery-drawer";

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