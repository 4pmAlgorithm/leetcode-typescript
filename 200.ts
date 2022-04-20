//4 2022/4/20 4:00pm - 4:20pm
function numIslands(grid: string[][]): number{
    let count: number = 0;
    
    for(let row: number = 0; row < grid.length; row++){
        for(let col: number = 0; col < grid[0].length; col++){
            if( grid[row][col] === "1"){ //then this is the island 
                count++ //so we count the island
                depthFirstSearchFunc(row, col) // then we have to mark the current location, and its up, down, left, right as ocean
            }
        }
    }
    
    function depthFirstSearchFunc(row:number, col:number){
        if(grid[row][col] === "0") return //if the current location is ocean then exit this function
        
        grid[row][col] = "0" //if it was an island, then mark it as visited and turn it into an ocean
        
        if(row > 0) depthFirstSearchFunc(row-1, col) //if row number is larger than 1, recursively send this location to the same function
        if(row < grid.length-1) depthFirstSearchFunc(row+1, col) //bottom
        if(col > 0) depthFirstSearchFunc(row, col-1) //left
        if(col < grid[0].length-1) depthFirstSearchFunc(row, col+1) //right
        
    }
    return count
}


//3 2022/4/20 4:00pm
function numIslands(grid: string[][]): number {

    let count = 0;
    
    for(let row=0; row < grid.length; row++ ){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === "1"){
                count++
                depthFirstSearchFunc(row, col)
            }
        }
    }
    
    function depthFirstSearchFunc(r:number, c:number){
                
        if(grid[r][c] === "0") return;
            grid[r][c] = "0";
            
            if( r > 0) depthFirstSearchFunc(r-1,c) //top
            if( r < grid.length-1)  depthFirstSearchFunc(r+1, c) //bottom
            if( c > 0)  depthFirstSearchFunc(r, c-1) //left
            if( c < grid[0].length-1)  depthFirstSearchFunc(r, c+1) //right
        }
    console.log(count)
    return count
};


//2 2022/04/19 5:20pm
function numIslands(grid: string[][]): number {
    const rowLength = grid.length;
    const colLength = grid[0].length; 

    let count = 0;

    for(let row = 0; row < rowLength; row++){
        for(let col = 0; col < colLength; col++){

            if(grid[row][col] === "1"){
                count++;
                visitedFunc(row, col)
            }
        }
    }

    function visitedFunc(row:number, col:number){
        if(grid[row][col] === "0") return;

        grid[row][col] = "0"; 

        if(row > 0) visitedFunc(row-1, col)
        if(row < rowLength-1)visitedFunc(row+1, col)
        if(col > 0) visitedFunc(row, col-1)
        if(col < colLength-1)visitedFunc(row, col+1)
    }

    console.log(count)
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

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

numIslands(grid)