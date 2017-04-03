<template lang="html">
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <a href="/" class="nav-item">
                    <img src="favicon.ico" alt="Dashlegends logo">
                </a>
                <a href="/" class="nav-item is-tab is-hidden-mobile">Home</a>
                <a href="/games" class="nav-item is-tab is-hidden-mobile">Games</a>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
                <a class="nav-item is-tab is-hidden-tablet">Home</a>
                <a class="nav-item is-tab is-hidden-tablet">Games</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data: function() {
            return {
            }
        },
        methods: {
            tabActivate: function() {
//                $(".nav-item").each(function() {
//                    $(this).addClass( "is active" );
//                });
            }
        }
    }
</script>

<style lang="css">
</style>