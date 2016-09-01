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
            <h3><i class="fa fa-heart-o" aria-hidden="true"></i> Favorites</h3>
        </div>

        <div class="row" style="margin-left: 25px;">
            <table class="u-full-width">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Coords</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kitchen</td>
                        <td>(69, 420)</td>
                        <td><i class="pointy fa fa-cog" aria-hidden="true" @click="$root.toggleOptions"></i></td>
                    </tr>
                    <tr>
                        <td>The Bedroom :^)</td>
                        <td>(1337, 360)</td>
                        <td><i class="pointy fa fa-cog" aria-hidden="true" @click="$root.toggleOptions"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>