//Remove Constants

function printFirstItemThenFirstFirstHalfThenSayHi100Times(items){
    console.log(items[0]);

    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index ++;
    }

    for(let i =0; i < 100; i++) {
        console.log("hi");
    }
}

console.log(printFirstItemThenFirstFirstHalfThenSayHi100Times(['신발', '양말', '텔레비젼', '컴퓨터']))