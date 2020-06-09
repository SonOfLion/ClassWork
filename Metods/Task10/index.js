export const timer = {
    secondsPassed: 0,
    minutesPassed: 0,
    intervalId: null,
    // startTimer() {
    //     // LOOSE CONTEXT
    //     const adder = function() {
    //         this.secondsPassed += 1;
    //         console.log(this.secondsPassed);
    //     }
    //     // fix context
    //     const newAdder = adder.bind(this);
    //     setInterval(newAdder, 1000)
    // },
    startTimer() {
        this.intervalId = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minutesPassed += 1;
            }
            // console.log(this.secondsPassed);
        }, 1000)
        console.log('ID ' + this.intervalId);
    },
    stopTimer() {
        clearInterval(this.intervalId);
    },
    getTime() {
        // let secondsFormated = this.secondsPassed < 10 ?
        //     `0${this.secondsPassed}` :
        //     this.secondsPassed;

        return `${this.minsPassed}:0${this.secondsPassed}`;;
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
};
timer.startTimer();
timer.stopTimer();

timer.startTimer();
timer.stopTimer();

// const user = {
//     name: 'Andrey',
//     sayHi() {
//         console.log(this);
//         console.log('hello ${this.name');
//     }
// }

// user.sayHi();

// let func = user