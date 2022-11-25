
let arr = [`11000`,`01001`,`10011`,`00000`,`10101`];
let rows, cols;

console.log(countIslands(arr));

function countIslands(arr) {
    let temp = []
    arr.forEach(element => {
        let columnArray = element.split(``), a1=[];
        columnArray.forEach((data)=>{
            a1.push(data)
        })
        temp.push(a1);
    });

    rows = temp.length;
    cols = temp[0].length;
    let ifVisited = new Array(rows);
    for (let i = 0; i < rows; i++) {
        ifVisited[i] = new Array(cols);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ifVisited[i][j] = false;
        }
    }
    let count = 0;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (arr[i][j] == `1` && !ifVisited[i][j]) {
                findTreeOf1s(arr, i, j, ifVisited);
                count++;
            }
        }
    }
    return count;
}

function findTreeOf1s(M, row, col, visited) {
    let rowCoordinates = [-1, -1, -1, 0, 0, 1, 1, 1];
    let columnCoordinates = [-1, 0, 1, -1, 1, -1, 0, 1];
    visited[row][col] = true;
    for (let k = 0; k < 8; ++k) {
        if (isSafe(M, row + rowCoordinates[k], col + columnCoordinates[k], visited)) {
            findTreeOf1s(M, row + rowCoordinates[k], col + columnCoordinates[k], visited);
        }
    }

}

function isSafe(M, row, col, visited) {
    return (row >= 0) && (row < rows) && (col >= 0) && (col < cols) && (M[row][col] == `1` && !visited[row][col]);
}

