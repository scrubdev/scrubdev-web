<template>
<div>
    <div class="load-screen">
        <div class="bg-full"></div>
        <div class="centerup loading"></div>

        <div class="plane-wrap feiji-transition">
            <img src="/static/assets/plane.png" class="centerup" alt="scrubdev" height="125px">
        </div>

        <div style="color: yellowgreen; top: calc(50% + 50px);" class="centerup">
            <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";

export default {
    ready: function() {
        setTimeout(() => {
            // ugh. - need a better solution than this all -- shitty hack
            $(".plane-wrap").addClass("feiji-leave");
            setTimeout(() => this.$router.go("/home"), 1250);
        }, 3500);
    }
}
</script>