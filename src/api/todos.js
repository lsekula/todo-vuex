const _tasks = [
  {"id": 1, "content": "Kanapka z masłem orzechowym", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 2, "content": "Pranie",  "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 3, "content": "Trening", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 4, "content": "Łupanie orzechów", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 5, "content": "Picie soku z cytryny", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 6, "content": "Kupic prezenty", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"},
  {"id": 7, "content": "Wysłać kartki", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"}
]

export default {
  getTasks (cb) {
    setTimeout(() => cb(_tasks), 300)
  },

  // TODO: zaznaczanie wszystkich tasków - bardziej uniwersalne
  checkTasks (tasks, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
