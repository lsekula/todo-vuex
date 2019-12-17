const _tasks = [
  {"id": 1, "content": "Peanut butter sandwich", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 2, "content": "Buy tickets to the opera",  "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 3, "content": "Training", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 4, "content": "Washing", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 5, "content": "Cleaning", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 6, "content": "Meet friends", "done": true, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 7, "content": "Dishwashing", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"}
]

export default {
  getTasks (cb) {
    setTimeout(() => cb(_tasks), 300)
  }
}
