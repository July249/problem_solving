# 최소공배수

T = int(input())

for i in range(T):
    x, y = map(int, input().split())
    
    a = x
    b = y
    if a < b:
        a, b = b, a
    while b != 0:
        a, b = b, a % b

    print((x * y) // a)