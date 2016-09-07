<!--
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
-->

<template>
<div>
    <div class="load-screen">
        <div class="centerup loading"></div>

        <div class="plane-wrap feiji-transition">
            <img src="/static/assets/plane.png" class="centerup" alt="scrubdev" height="125px">
        </div>

        <div style="color: #DE4AE7; top: calc(50% + 50px);" class="centerup">
            <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";

import "../stylesheet/loading.css";

export default {
    ready: function() {
        // CRAPPY JQUERY WORK AROUNDS YAY!
        $("main").append(`<div class="bg-full"></div>`);

        setTimeout(() => {
            // ugh. - need a better solution than this all -- hack xdxd
            $(".plane-wrap").addClass("feiji-leave");
            $(".bg-full").addClass("fade-out-transition");
            setTimeout(() => {
                $(".bg-full").remove();
                this.$router.go("/home");
            }, 950);
        }, 3500);
    }
}
</script>
