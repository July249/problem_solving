# 피로도

# A: 시간당 피로도
# B: 시간당 할 수 있는 일의 양
# C: 시간당 회복도
# M: 피로도 한계치

A, B, C, M = input().split()
A = int(A)
B = int(B)
C = int(C)
M = int(M)

load = 0
fatigue = 0

for i in range(24):
    if fatigue + A <= M:
        fatigue += A
        load += B
    else:
        if fatigue - C >= 0:
            fatigue -= C
        else:
            fatigue = 0

print(load)