N, M = map(int, input().split())

arr = []
# 바구니 생성
for b in range(N):
    arr.append(str(b + 1))

t = 0
while t < M:
    i, j = map(int, input().split())
    a = arr[i - 1]
    b = arr[j - 1]
    arr[i - 1] = b
    arr[j - 1] = a
  
    t += 1

print(' '.join(arr))

# 1 2 3
# 2 1 1
# 3 4
# 4 3 2
# 5