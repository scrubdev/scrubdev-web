import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

// DRAWER
import IScroll from "iscroll";
import $ from "jquery";
import "jquery-drawer";

// SOCKETS
import io from "socket.io-client";

// VENDOR - STYLES
import "./vendor/raleway-font.css";
import "./vendor/skeleton-2.0.4/normalize.css";
import "./vendor/skeleton-2.0.4/skeleton.css";
import "jquery-drawer/dist/css/drawer.min.css";
import "font-awesome/css/font-awesome.css";

// STYLES
import "./stylesheet/main.css";
import "./stylesheet/transition.css";
import "./stylesheet/drawer.css";
import "./stylesheet/dark_theme.css";

// VUE ROUTER
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueResource);

const App = Vue.extend({
    data: function() {
        return {
            darkTheme: (localStorage.getItem("scrubdev.interface.dark") === "true" ? true : false),
            optionsDrawer: false,
            socket: io()
        };
    },
    ready: function() {
        // attach sockets
        this.socket.on("scrubdev.test", res => {
            console.log("socket: " + res);
        });
    },
    methods: {
        hidedrawer: function() {
            $(".main-drawer").drawer("close");
        },
        toggleOptions: function() {
            if (!this.optionsDrawer)
                $(".options-drawer").drawer("open");
            else
                $(".options-drawer").drawer("close");

            this.optionsDrawer = !this.optionsDrawer;
        }
    }
});

const Router = new VueRouter({ transitionOnLoad: true });
Router.map(routes);

Router.start(App, "body");


// DRAWER INIT
$(".main-drawer").drawer();
$(".options-drawer").drawer({
    class: {
        nav: "options-drawer-nav",
        toggle: "options-drawer-toggle",
        dropdown: "options-drawer-dropdown"
    }
});


// LOADED.
$("body").addClass("ready");