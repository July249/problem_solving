N, M = map(int, input().split())

arr = []
# 바구니 생성
for b in range(N):
    arr.append('0')

t = 0
while t < M:
    i, j, k = map(int, input().split())
    for idx in range(i, j + 1):
        arr[idx - 1] = str(k)
    
    t += 1

print(" ".join(arr))
