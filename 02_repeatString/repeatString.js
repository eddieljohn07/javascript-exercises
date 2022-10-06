const repeatString = function(_repeat, _times) {
    let n = 0
    while (n === 0){
        _times = 0
        for (let i= 0; _times > i; _times++)
        if (_times > 0){
            _word = 'hey'
            let _repeat = _word.repeat(_times);
            n++;
            return _repeat;
        }else {
            return 'ERROR'
        }
        }
    }
// Do not edit below this line
module.exports = repeatString;