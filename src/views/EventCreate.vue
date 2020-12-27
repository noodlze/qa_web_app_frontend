<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <p>{{ getQuestionById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getQuestionById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>
