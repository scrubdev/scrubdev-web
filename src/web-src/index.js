/*
 * scrubdev - Web Frontend for the Automation System Project.
 * Copyright (C) 2016 scrubdev (lead - Nicholas Tay <nexerq@gmail.com>)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, at version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

// DRAWER
import IScroll from "iscroll";
import $ from "jquery";
import "jquery-drawer";

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
            optionsDrawer: false
        };
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