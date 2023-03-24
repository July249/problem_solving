# 세로읽기

matrix = []
answer = []

rowLength = 15;
count = 5
while count > 0:
    try:
        row = list(input())

        if len(row) < rowLength:
            for i in range(15-len(row)):
                row.append('')
        
        matrix.append(row)
        count -= 1
    except:
        break

for colIndex in range(len(row)):
    for rowIndex in range(len(matrix)):
        answer.append(matrix[rowIndex][colIndex])

print(''.join(answer))


