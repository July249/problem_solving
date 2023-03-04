# 바구니 순서 바꾸기
N, M = map(int, input().split())
arr = []
for i in range(1, N + 1):
    arr.append(i)

while M > 0:
    i, j, k = map(int, input().split())

    begin = i - 1
    end = j # 미포함
    mid = k - 1

    org_arr1 = arr[: begin]
    org_arr2 = arr[end :]
    if i == k:
        arr = org_arr1 + arr[begin: end] + org_arr2
    else:
        arr1 = arr[begin : mid]
        arr2 = arr[mid : end]
        arr3 = arr2 + arr1
        arr = org_arr1 + arr3 + org_arr2
    
    M -= 1

print(arr)