N, M = map(int, input().split())

arr = []
for b in range(N):
    arr.append(str(b + 1))

t = 0
while t < M:
    i, j = map(int, input().split())
    pick = arr[i - 1:j]
    arr = arr[:i-1] + pick[::-1] + arr[j:]
    t += 1

print(' '.join(arr))