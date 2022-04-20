//2 2022/04/19 5:20pm
function numIslands(grid) {
    var rowLength = grid.length;
    var colLength = grid[0].length;
    var count = 0;
    for (var row = 0; row < rowLength; row++) {
        for (var col = 0; col < colLength; col++) {
            if (grid[row][col] === "1") {
                count++;
                visitedFunc(row, col);
            }
        }
    }
    function visitedFunc(row, col) {
        if (grid[row][col] === "0")
            return;
        grid[row][col] = "0";
        if (row > 0)
            visitedFunc(row - 1, col);
        if (row < rowLength - 1)
            visitedFunc(row + 1, col);
        if (col > 0)
            visitedFunc(row, col - 1);
        if (col < colLength - 1)
            visitedFunc(row, col + 1);
    }
    console.log(count);
    return count;
}
// //1
// function numIslands(grid: string[][]): number {
//     const rowLen = grid.length;
//     const colLen = grid[0].length;
// 	// Set the current island to "0"
//     const visited = (row: number, col: number) => {
//         console.log(row, col, grid[row][col])
//         if (grid[row][col] === "0") return;
//         grid[row][col] = "0";
//         if (row > 0) visited(row - 1, col); // Top
//         if (row < rowLen - 1) visited(row + 1, col); // Bottom
//         if (col > 0) visited(row, col - 1); // Left
//         if (col < colLen - 1) visited(row, col + 1); // Right
//     }
//     let count = 0;
//     for (let row = 0; row < rowLen; row++){
//         for (let col = 0; col < colLen; col++){
//             if (grid[row][col] === "1") {
//                 count++;
//                 visited(row, col);
//             }
//         }
//     }
//     console.log(count)
//     return count;
// };
var grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
numIslands(grid);
