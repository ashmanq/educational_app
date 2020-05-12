const baseUrl = "http://localhost:3000/api/lessons/";

export default {
  getLessons() {
    return fetch(baseUrl)
    .then(res => res.json());
  },
  addNewLesson(newLesson) {
    console.log(newLesson);
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(newLesson),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },
  updateLesson(id, payload) {
    return fetch(baseUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteLesson(id) {
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  }
}
