const baseURL = 'http://localhost:3000/api/lessons/'

export default {
  getLessons(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postLesson(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteLesson(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
