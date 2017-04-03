<template lang="html">
    <div class="container">
        <something></something>
        <div class="content has-text-centered">
            <h1 class="title">
                    <span class="icon is-large">
                        <i class="fa fa-gamepad"></i>
                    </span>
                {{title}}
            </h1>
        </div>
        <div class="columns">
            <div class="column">
                <div class="content">
                    <games v-bind:games="games"></games>
                </div>
            </div>
            <div class="column">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hunc vos beatum; Simus igitur contenti his. Duo Reges: constructio interrete. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Honesta oratio, Socratica, Platonis etiam. Claudii libidini, qui tum erat summo ne imperio, dederetur. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            }
        }
    }
</script>

<style lang="css">
</style>