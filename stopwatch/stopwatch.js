new Vue({
  el: '#app',
  data: {
    title: 'Timer',
    timer: null,
    totalTime: (1*180),
    resetButton: false,
    totalTime: (1*180)
    // time:'00:00:00',
    // timeBegan = null,
    // stopped = null,
    // stoppedDuration = 0,
    // started = null,
    // running = false
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


    // start() {
    //   if (running)
    //     return;
    //   if (timeBegan === null) {
    //     reset();
    //     timeBegan = new Date();
    //   }
    //   if (stopped !== null) {
    //     stoppedDuration += (new Date() - stopped);
    //   }
    //   started = setInterval(clockRunning, 1000); //1초 후에 clockRunning호출
    //   running = ture;
    // },
    // stop() {
    //   running = false;
    //   stopped = new Date();
    //   clearInterval(started);
    // },
    // reset() {
    //   running = false;
    //   clearInterval(started);
    //   stoppedDuration = 0;
    //   timeBegan = null;
    //   stopped = null,
    //   clock.time = "00:00:00";
    // },
    // clockRunning() {
    //   let currentTime = new Date(),
    //     timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
    //     hour = timeElapsed.getUTCHours(),
    //     min = timeElapsed.getUTCMinutes(),
    //     sec = timeElapsed.getUTCSeconds();
      
    //   clock.time =
    //     zeroPrefix(hour, 2) + ":" +
    //     zeroPrefix(min, 2) + ":" +
    //     zeroPrefix(sec, 2);
    // },
    // zeroPrefix(num, digit) {
    //   let zero = '';
    //   for (let i = 0; i < digit; i++){
    //     zero += '0';
    //   }
    //   return (zero + num).slice(-digit);
    // }
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