<template lang="html">
    <div class="">
        <ul>
            <li v-for="game in games">
                <a v-bind:href="'/games/' + game.id">
                    <div class="box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="favicon.ico" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{game.name}}</strong>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item">
                                            <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                        </a>
                                        <a class="level-item">
                                            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                        </a>
                                        <a class="level-item">
                                            <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['games']
    }
</script>

<style lang="css">
</style>