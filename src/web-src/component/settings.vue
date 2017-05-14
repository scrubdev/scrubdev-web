<template>
<div>
    <div class="container">
        <div class="row">
            <h3><i class="fa fa-cogs" aria-hidden="true"></i> Settings</h3>
        </div>

        <div class="row" style="margin-left: 25px;">
            <table class="u-full-width">
                <thead>
                    <tr>
                        <th>Setting</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>setting.advanced</td>
                        <td>Display advanced settings (not recommended)</td>
                        <td><i class="pointy fa fa-cog" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>ayy.lmao</td>
                        <td>xd nice meme</td>
                        <td><i class="pointy fa fa-cog" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>interface.dark</td>
                        <td>Casual dark theme.</td>
                        <td>
                            <i v-if="$root.darkTheme" class="pointy fa fa-toggle-on icon-button" @click="toggleDark"></i>
                            <i v-else class="pointy fa fa-toggle-off icon-button" @click="toggleDark"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import "../stylesheet/settings.css";

export default {
    methods: {
        toggleDark: function() {
            localStorage.setItem("scrubdev.interface.dark", !this.$root.darkTheme);
            this.$root.darkTheme = !this.$root.darkTheme;
        }
    }
}
</script>