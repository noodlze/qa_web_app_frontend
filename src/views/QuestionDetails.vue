<template>
  <div>
    <div class="question-header">
      <span class="eyebrow">@{{ question.created_at }}</span>
      <h5>{{ question.likes }} likes</h5>
      <h5>{{ question.dislikes }} dislikes</h5>
    </div>
    <h2>Event details</h2>
    <p>{{ question.content }}</p>
  </div>
</template>
<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      question: {},
      answers: [],
    }
  },
  created() {
    EventService.getQuestion(this.id)
      .then(response => {
        this.question = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
      
    EventService.getAnswers(this.id)
      .then(response => {
        console.log("EventService.getAnswers(this.id):", response)
        this.answers = response.data
      })
      .catch(error => {
        console.log(EventService.getAnswers(this.id) err:", error)
      })
  }
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.question-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
