<template>

</template>




<script>
export default {
  data () {
    return {
      song:{
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
    methods: {
      async create () {
        this.error = null
        const areAllFieldsFilledIn = Object
          .keys(this.song)
          .every(ket => !!this.song[key])
        if(!areAllFieldsFilledIn){
          this.error = 'Please fill in all the required fields.'
          return
        }
        try {
          await SongService.post(this.song)
          this.$router.push({
            name:'songs'
          })
        } catch (err){
        console.log(err)
      }
    }
  }
}
</script>





<style lang="css">
</style>
