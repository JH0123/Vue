new Vue({
  el: '#app',
  data: {
    title: 'Timer',
    timer: null,
    totalTime: (1*180),
    resetButton: false,
    totalTime: (1*180)
  },
  
  methods: {
    start() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stop() {
      clearInterval(this.timer);
      this.timer = nullthis.resetButton = true;
    },
    reset() {
      this.totalTime = (1 * 180);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown() {
      if(this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer;
      }
    }
  },
  
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
});
