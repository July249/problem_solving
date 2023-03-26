# 약수 구하기

N, K = map(int, input().split())

arr = []

for i in range(N):
    if (N % (i + 1) == 0):
        arr.append(i + 1)
    
if (len(arr) > (K - 1)):
    print(arr[K - 1])
else:
    print(0)