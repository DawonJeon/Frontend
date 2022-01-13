/*
공간복잡도는 메모리 공간을 얼마나 많이 사용하는가
공간복잡도는 input의 영향을 받지 않는다.
*/


// O(1) : 변수 i를 0이라고 선언한 것 외에는 공간복잡도 없음

// function boo(n) {
//     for (let i=0 ; i < n.length; i++) {
//         console.log('booo!');
//     }
// }

// O(n)
function arraOfHinTimes(n) {
    let hiArray = [];
    for (let i = 0 ; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arraOfHinTimes(6));