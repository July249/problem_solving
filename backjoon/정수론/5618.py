# 공약수

n = int(input())
arr = list(map(int, input().split()))

def gcd(a, b):
    if a < b:
        a, b = b, a
    while b != 0:
        a, b = b, a % b
    return a

def get_cd(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        return gcd(arr[0], get_cd(arr[1:]))
    

cd = get_cd(arr)
result = []
for i in range(1, (cd // 2) + 1):
    if cd % i == 0:
        result.append(i)
result.append(cd)

for i in result:
    print(i)