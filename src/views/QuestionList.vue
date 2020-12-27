<template>
  <div>
    <h1>Questions List</h1>
    <QuestionCard v-for="question in questions" :key="question.id" :question="question"/>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      questions: []
    }
  },
  created() {
    EventService.getQuestions()
      .then(response => {
        console.log("EVENT SERVICE GET QUESTIONS----",response);
        this.questions = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
