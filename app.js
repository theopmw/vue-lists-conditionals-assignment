const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount('#assignment');
