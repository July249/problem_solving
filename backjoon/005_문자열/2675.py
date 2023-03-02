# 문자열 반복

T = int(input())

for i in range(T):  
    repeat, letter = input().split()
    result = ''
    for i in letter:
        result += i * int(repeat)
    print(result)