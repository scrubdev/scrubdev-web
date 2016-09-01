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
    <div class="container">
        <div class="row">
            <h3><i class="fa fa-home" aria-hidden="true"></i> Dashboard</h3>
        </div>

        <div class="row" style="margin-left: 25px;">
            <table class="temp">
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </table>

            <input type="button" value="Go Home" style="margin-right: 3px;">
            <input type="button" v-if="muteStatus" value="Unmute Mic" @click="toggleMute">
            <input type="button" v-if="!muteStatus" value="Mute Mic" @click="toggleMute">
        </div>

        <div class="row" style="margin-top: 15px;">
            <h4><i class="fa fa-circle-o" aria-hidden="true"></i> Status</h4>
        </div>
        <div class="row" style="margin-left: 25px;" v-bind:style="{ color: statusColor }">
            {{ statusMsg }}
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            statusMsg: "",
            statusColor: "black",
            muteStatus: false
        };
    },
    ready: function() {
        this.statusMsg = "All systems dead inside and cannot be woken up.";
        this.statusColor = "orange";
    },
    methods: {
        toggleMute: function() {
            this.muteStatus = !this.muteStatus;
        }
    }
}
</script>