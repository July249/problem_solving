# 최댓값

import math

max_value = -math.inf
row_count, row_index, col_index = 0, 0, 0

while True:
    try:
        row_count += 1
        row = list(map(int, input().split()))
        max_in_row = max(row)

        if max_in_row > max_value:
            max_value = max_in_row       
            row_index = row_count
            col_index = row.index(max_in_row) + 1

    except:
        break
    
print(max_value)
print(row_index, col_index)