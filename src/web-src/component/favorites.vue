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