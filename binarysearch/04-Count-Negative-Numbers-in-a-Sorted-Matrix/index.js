/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let c = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=grid[i].length-1; j>=0; j--){
            if(grid[i][j]<0){
                c += 1;
            }else{
                break;
            }
        }
    }
    return c;
};