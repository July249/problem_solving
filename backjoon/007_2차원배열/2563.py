# 색종이

import sys

arr = [[0 for _ in range(101)] for _ in range(101)] # 2차원 배열 생성
N = int(input())

for _ in range(N):
    x, y = list(map(int, input().split()))

    for row in range(x, x + 10):
        for col in range(y, y + 10):
            arr[row][col] = 1

result = 0

for i in arr:
    result += i.count(1)

print(result)

# 내 풀이 (below)

# def multiFoldArea(p1, p2, p3):
#   x_arr = [int(p1[0]), int(p2[0]), int(p3[0])]
#   y_arr = [int(p1[1]), int(p2[1]), int(p3[1])]

#   x_min = min(x_arr)
#   x_max = max(x_arr)
  
#   y_min = min(y_arr)
#   y_max = max(y_arr)
  
#   return (x_min + 10 - x_max) * (y_min + 10 - y_max)


# def overlapArea(p1, p2):
#   x = 0
#   y = 0

#   if (int(p1[0]) < int(p2[0])):
#     x = (int(p1[0]) + 10) - int(p2[0])
#   elif (int(p1[0]) > int(p2[0])):
#     x = (int(p2[0]) + 10) - int(p1[0])
#   else:
#     x = 10

#   if (int(p1[1]) < int(p2[1])):
#     y = (int(p1[1]) + 10) - int(p2[1])
#   elif (int(p1[1]) > int(p2[1])):
#     y = (int(p2[1]) + 10) - int(p1[1])
#   else:
#     y = 10

#   if (x < 0 and y < 0):
#     return (-1) * x * y
  
#   return x * y

# totalArea = 300
# data = []
# count = int(input())

# while (count > 0):
#     try:
#         square = list(input().split())
#         data.append(square)
#         count -= 1
#     except:
#       break

# A = data[0]
# B = data[1]
# C = data[2]

# overlapAB = overlapArea(A, B)
# overlapAC = overlapArea(A, C)
# overlapBC = overlapArea(B, C)

# overlapABC = multiFoldArea(A, B, C)

# if (overlapAB >= 0 and overlapAB <= 100):
#   totalArea -= overlapAB
# elif (overlapAB < 0):
#   totalArea -= 0

# if (overlapAC >= 0 and overlapAC <= 100):
#   totalArea -= overlapAC
# elif (overlapAC < 0):
#   totalArea -= 0

# if (overlapBC >= 0 and overlapBC <= 100):
#   totalArea -= overlapBC
# elif (overlapBC < 0):
#   totalArea -= 0

# if (overlapAB > 0 and overlapAC > 0 and overlapBC > 0):
#   totalArea += overlapABC

# print(totalArea)


# Test Case

# (1) 정사각형 두개가 서로 일정 부분 겹치는 경우
# A = [3, 7]
# B = [16, 8]
# C = [5, 2]
# print(overlapAB) -27
# print(overlapAC) 40
# print(overlapBC) -4
# expected value = 260

# (2) 정사각형 세개가 완전히 겹치는 경우
# A = [3, 7]
# B = [3, 7]
# C = [3, 7]
# print(overlapAB) 100
# print(overlapAC) 100
# print(overlapBC) 100
# expected value = 100

# (3) 정사각형 두개가 완전히 겹치는 경우
# A = [3, 7]
# B = [3, 7]
# C = [50, 50]
# print(overlapAB) 100
# print(overlapAC) -1221
# print(overlapBC) -1221
# expected value = 200

# (4) 정사각형 두개가 완전히 겹치고, 그 위에 정사각형이 부분적으로 겹치는 경우
# A = [0, 0]
# B = [0, 0]
# C = [5, 5]
# print(overlapAB) 100
# print(overlapAC) 25
# print(overlapBC) 25
# print(overlapABC) 25
# expected value = 175

# (5) 겹치는 것이 없는 경우
# A = [0, 0]
# B = [50, 50]
# C = [30, 30]
# print(overlapAB) -1600
# print(overlapAC) -400
# print(overlapBC) -100
# expected value = 300

# (6) 정사각형 세개가 모두 일정부분 겹치는 경우
# A = [0, 10]
# B = [6, 3]
# C = [8, 8]
# print(overlapAB) 12
# print(overlapAC) 16
# print(overlapBC) 40
# print(overlapABC) 6
# expected value = 238