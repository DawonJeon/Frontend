/**
 * [].forEach = 배열 객체의 메서드
 * forEach는 for문과 마찬가지로 반복적인 기능을 수행함.
 * for문처럼 index와 조건식, increase를 정의하지 않아도 callback함수 통해 기능 수행가능 
 */

 const arr = [0,1,2,3,4,5,6,7,8,9,10];

 // arr.forEach(function(element){
 //     console.log(element);
 // });
 
 arr.forEach(element => console.log(element));
 
 
 /**------------------------------ 
  * forEach는 return이 없음
  * 즉, callback함수에 의해 어떤 결과물을 내놓고 싶으면 함수 밖의 변수를 사용해야함. 
 */
 
 const oddArray = [];
 
 arr.forEach(function(element){
     if(element%2==1) {
         oddArray.push(element);
     }
 });
 
 console.log(oddArray);
 
 
 /** -----------------------------------
  * callback함수 인자
  * forEach의 callback함수에는 배열의 요소뿐만 아니라 index, 전체 배열을 인자로 사용가능 
  */
 
 arr.forEach(function(element, index, array) {
     console.log(`${array}의 ${index}번째 요소 : ${element}`);
 });
 
 