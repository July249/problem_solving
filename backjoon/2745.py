# 진법 변환

T = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

a, b = input().split()

answer = 0
arr = []
for i in range(len(a)):
    arr.append(str(a[i]))

for i in range(len(arr)):
    n = T.find(arr[i])
    answer += n * (int(b) ** (len(arr) - i - 1))

print(answer)