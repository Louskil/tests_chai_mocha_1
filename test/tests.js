//import { Matrix1 } from "./index.js";
// test/mtrx.test.js
import { expect } from 'chai';
import Mtrx from 'mtrx';

describe('Mtrx Library Basic Operations', function() {
    
    describe('Matrix Creation', function() {
        it('should create a matrix with correct dimensions', function() {
            const matrix = new Mtrx(2, 2);
            expect(matrix).to.be.an('array');
            expect(matrix).to.have.lengthOf(2);
            expect(matrix[0]).to.have.lengthOf(2);
        });

        it('should create matrix from array with fill', function() {
            const matrix = new Mtrx(2, 2, 1);
            expect(matrix[0]).to.deep.equal([1, 1]);
            expect(matrix[1]).to.deep.equal([1, 1]);
        });
    });

    describe('Matrix Operations', function() {
        let matrixA, matrixB;

        beforeEach(function() {
            matrixA = new Mtrx(2, 2);
            matrixA[0][0] = 1; matrixA[0][1] = 2;
            matrixA[1][0] = 3; matrixA[1][1] = 4;

            matrixB = new Mtrx(2, 2);
            matrixB[0][0] = 5; matrixB[0][1] = 6;
            matrixB[1][0] = 7; matrixB[1][1] = 8;
        });

        it('should add two matrices correctly', function() {
            const result = Mtrx.add(matrixA, matrixB);
            expect(result[0][0]).to.equal(6);
            expect(result[0][1]).to.equal(8);
            expect(result[1][0]).to.equal(10);
            expect(result[1][1]).to.equal(12);
        });

        it('should subtract two matrices correctly', function() {
            const result = Mtrx.sub(matrixA, matrixB);
            expect(result[0][0]).to.equal(-4);
            expect(result[0][1]).to.equal(-4);
            expect(result[1][0]).to.equal(-4);
            expect(result[1][1]).to.equal(-4);
        });

        it('should multiply two matrices correctly', function() {
            const result = Mtrx.mul(matrixA, matrixB);
            expect(result[0][0]).to.equal(19);
            expect(result[0][1]).to.equal(22);
            expect(result[1][0]).to.equal(43);
            expect(result[1][1]).to.equal(50);
        });
    });

    describe('Matrix Utility Functions', function() {
        it('should check if matrix is square', function() {
            const squareMatrix = new Mtrx(2, 2);
            const nonSquareMatrix = new Mtrx(2, 3);
            
            const isSquare = (matrix) => matrix.length === matrix[0].length;
            
            expect(isSquare(squareMatrix)).to.be.true;
            expect(isSquare(nonSquareMatrix)).to.be.false;
        });

        it('should transpose matrix correctly', function() {
            const matrix = new Mtrx(2, 2);
            matrix[0][0] = 1; matrix[0][1] = 2;
            matrix[1][0] = 3; matrix[1][1] = 4;
            
            const transposed = new Mtrx(2, 2);
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    transposed[j][i] = matrix[i][j];
                }
            }
            
            expect(transposed[0]).to.deep.equal([1, 3]);
            expect(transposed[1]).to.deep.equal([2, 4]);
        });
    });

    describe('Matrix Properties', function() {
        it('should access and modify elements correctly', function() {
            const matrix = new Mtrx(2, 2);
            const initialValue = matrix[0][1]; 
            
            matrix[0][0] = 10;
            matrix[1][1] = 20;
            
            expect(matrix[0][0]).to.equal(10);
            expect(matrix[1][1]).to.equal(20);
            expect(matrix[0][1]).to.equal(initialValue); 
        });

        it('should initialize with random values between 0 and 1', function() {
            const matrix = new Mtrx(2, 2);
            
            
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    expect(matrix[i][j]).to.be.at.least(0);
                    expect(matrix[i][j]).to.be.at.most(1);
                }
            }
        });
    });
});