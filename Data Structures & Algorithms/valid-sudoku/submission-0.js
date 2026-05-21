class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check rows
        for (const row of board) {
            if (this.hasDuplicate(row)) return false;
        }
        // check columns
        for (let i = 0; i < board.length; i++) {
            const column = [];
            let row = 0;
            while (row < 9) {
                column.push(board[row][i]);
                row++;
            }
            if (this.hasDuplicate(column)) return false;
        }
        
        for (let box = 0; box < 9; box++) {
            const boxValues = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(box / 3) * 3 + i;
                    let col = (box % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    boxValues.push(board[row][col]);
                }
            }
            if (this.hasDuplicate(boxValues)) return false;
        }

        return true;
    }

    hasDuplicate(nums) {
        const map = {};
        for (const n of nums) {
            if (n === '.') continue;
            if (map[n]) return true;
            map[n] = true;
        }
        return false;
    }
}
