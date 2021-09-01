type timekeeperCallback = (elapsedTime: number) => void

interface Timekeeper {
    registerCallback: (callback: timekeeperCallback) => Timekeeper
    reset: () => void
}

class MyTimeKeeper implements Timekeeper{
    private _timeStarted : number;
    private _callBackMethod : timekeeperCallback;

    constructor (){
        this.reset();

        setInterval(() => {
            const timeSpent = Date.now() - this._timeStarted;
            if (this._callBackMethod) {
                this._callBackMethod(timeSpent);
            }
        },1000);
    }

    registerCallback (callback: timekeeperCallback)  {
        this._callBackMethod = callback;
        return this;
    }

    reset () {
        this._timeStarted = Date.now();
    }
}

export default MyTimeKeeper;