import { expect } from "chai";
import Mtrx from "mtrx";
//export const Matrix1 = new Mtrx();


function Matrix(n, k) {
    const Matrix1 = new Mtrx(n,n,k);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (Matrix1[i][j] != k) return false
        }
    }
}
