<template lang="html">
    <div class="container">
        <something></something>
        <div class="content">
            <h1 class="title">{{ msg }}</h1>
            <p>Remaining time:</p>
            <span>{{total.days}}</span> D : <span>{{total.hours}}</span> H : <span>{{total.minutes}}</span> M : <span>{{total.seconds}}</span> S
        </div>
    </div>
</template>


<script>

    export default {
        data: function() {
            return {
                msg: 'Welcome to UkiGames',
                total: { }
            }
        },
        computed:{
            displayCountdown: function(deadline) {
                var countdown = this.countdown(deadline)
                return this.total = countdown
            }
        },
        methods:{
            timer(){
                var countDownDate = new Date("Apr 30, 2017 22:22:22").getTime();

                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                return this.total = {
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                }
            }
        },
//        mounted(){
//            this.displayCountdown()
//        },
        created(){
            this.timer()
        }
    }
</script>

<style lang="css">
</style>