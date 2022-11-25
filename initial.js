
getIslands = (arr) => {
    let pos = [], island = 0, temp, indices = [], count = [];
    arr.forEach((ele, i) => {
        console.log(`ele: ${ele}`)

        let columnArray = ele.split(``);

        pos = getIndexPositions(columnArray);
        console.log(pos)

        if (!temp) {
            temp = pos;
            pos = []
        }
        else {
            console.log(temp)
            console.log(pos)
            
            temp.forEach((temp1, tempIndex) => {
                pos.forEach((pos1, posIndex) => {
                    let landIndex;
                    const diff = temp1 - pos1;
                    console.log(diff)
                    if (diff == 1 ||  diff == -1) {
                        // indices.push([temp1, pos1])
                        // console.log(temp1)
                        // console.log(pos1)
                        // // console.log(indices)
                        // if(indices.length>1){

                        // }
                        // island++
                        
                        // count.push(temp1>pos1?temp1:pos1)
                        landIndex = temp1>pos1?temp1:pos1
                    }
                    if (diff == 0){
                        landIndex = pos1

                    }
                    count.push(landIndex);
                    console.log(count)
                })
            })
        }

    })
    // console.log(pos)
}

getIndexPositions = (arr) => {
    const pos = []
    arr.forEach((data, index) => {
        if (data == `1`) {
            pos.push(index)
        }
    })
    return pos;
}

getIslands([`0101`, `1010`, `0001`, `0011`])