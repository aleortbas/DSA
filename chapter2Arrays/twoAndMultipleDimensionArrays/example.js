//Example on how to work multi-dimensional arrays
function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

printMatrix(matrix);

// creating a 3x3x3 matrix

var matrix3x3x3 = [];
for (var i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (var j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

for (var i = 0; i < matrix3x3x3.length; i++) {
    for (var j = 0; j < matrix3x3x3[i].length; j++) {
        for (var z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log("matrix3x3x: ", matrix3x3x3[i][j][z]);
        }
    }
}