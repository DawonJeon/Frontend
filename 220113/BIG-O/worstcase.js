
const nemo = ['nemo'];
const everyone = ['dory', 'brude', 'nemo', 'darla', 'nigel'];

findNemo = (array => {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log(i);
            console.log("Found NEMO");
            break;
        }
    }
});

//즉시 실행함수 (변수에다가는 소괄호 씌우지 않으며, 배열이 파라미터일경우 굳이 소괄호 필요없음.)

findNemo(everyone);
