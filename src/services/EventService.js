import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:5000/api/v1`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getQuestions() {
    return apiClient.get('/questions')
  },
  // async addQuestion(content) {
  //   apiClient.post('/questions', {
  //     'content': content
  //   }).then(function (response) {
  //     console.log("Added question", response);
  //   })
  //     .catch(function (error) {
  //       console.log("Unable to add question", error);
  //     });
  // },
  addQuestion(content) {
    return apiClient.post('/questions', {
      'content': content
    });
  },
  getQuestion(id) {
    return apiClient.get('/questions/' + id)
  },
  updateQuestion(id, content) {
    return apiClient.put('/questions/' + id, {
      'content': content
    });
  },
  deleteQuestion(id) {
    return apiClient.delete('/questions' / + id);
  },
  getAnswers(qn_id) {
    return apiClient.get('/questions/' + qn_id + '/answers');
  },
  addAnswer(qn_id, content) {
    return apiClient.post('/questions/' + qn_id + '/answers', {
      'content': content,
    });
  },
  getAnswer(qn_id, ans_id) {
    return apiClient.get('/questions/' + qn_id + '/answers/' + ans_id)
  },
  updateAnswer(qn_id, ans_id, content) {
    return apiClient.put('/questions/' + qn_id + '/answers/' + ans_id, {
      'content': content
    });
  },
  deleteAnswer(qn_id, ans_id) {
    return apiClient.delete('/questions/' + qn_id + '/answers/' + ans_id);
  },
}