<template>
  <form>
      <div class="form-row">
          <div class="form-group col-sm-6">
                <label>Date</label>
                <input 
                    type="date"
                    class="form-control"
                    v-model="timeEntry.date"
                    placeholder="Date">
          </div>
          <div class="form-group col-sm-6">
                <label>Hours</label>
                <input 
                    type="number"
                    class="form-control"
                    v-model="timeEntry.totalTime"
                    placeholder="Hours">
          </div>
      </div>
      <div class="form-group">
          <!-- <div class="form-group col-sm-12"> -->
                <label>Comment</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="timeEntry.comment"
                    placeholder="Comment">
          <!-- </div> -->
      </div>
      <div class="form-group">
            <button class="btn btn-primary" @click="save()">Save</button>
            <router-link to="/time-entries" tag="button" class="btn btn-danger">Cansel</router-link>
      </div>
      <hr>
  </form>
</template>

<script>
export default {
  data () {
    return {
      timeEntry: {
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
        }
      }
    }
  },
  methods: {
    save () {
      let timeEntry = this.timeEntry
      this.$dispatch('timeUpdate', timeEntry)
      this.timeEntry = {}
    }
  }
}
</script>
