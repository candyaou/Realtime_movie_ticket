<template>
    <div class="box">
        <template v-for="s in seats">
            <button 
                :class="className(s)"
                :disabled="disabledText(s)"
                @click="chooseSeat(s)"
                >{{s.id}} {{s.price}}</button>
            <span>&nbsp;</span>
        </template>
    </div>
</template>

<script>
import movie from 'Others/movie.json'
console.log(movie)

export default {
    props: [ 'movieId', 'selectSeats', 'firebaseSeat' ],
    methods: {
        disabledText(seat){
            return seat.seated
        },
        className(seat){
            const ids = this.selectSeats.map(s => s.id)
            const idx = ids.indexOf(seat.id)

            const firebaseIds = this.firebaseSeat.map(s => s.id)
            const firebaseIdx = firebaseIds.indexOf(seat.id)

            return[
                'button',
                { 
                    'is-danger' : seat.seated, 
                    'is-primary': idx != -1,
                    'is-warning': firebaseIdx != -1 && idx === -1
                }
            ]
        },
        chooseSeat(seat){
            this.$emit('chooseSeat',seat)
        }
    },
    computed: {
        seats(){
            return movie[this.movieId]
        }
    }
}
</script>