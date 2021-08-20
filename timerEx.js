const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startFunction = () => {
    document.getElementById('startBtn').style.visibility = 'hidden';
    document.getElementById('stopBtn').style.visibility = 'visible';
    let d = new Date();
    let n = d.getTime();
    localStorage.startTime = n;
    recursiveFunction();
};

recursiveFunction = () => {
    
}

stopFunction = () => {
    document.getElementById('stopBtn').style.visibility = 'hidden';
    let e = new Date();
    let o = e.getTime();
    let convert = o - localStorage.startTime;
    let duration = convert / 1000 - 1;
    document.getElementById('duration').textContent = duration + ' seconds.';
    document.getElementById('resetBtn').style.visibility = 'visible';
};

resetFunction = () => {
    window.location.reload();
};

startBtn.addEventListener('click', startFunction);
stopBtn.addEventListener('click', stopFunction);
resetBtn.addEventListener('click', resetFunction);