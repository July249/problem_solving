# 구매한 물건들의 총액
total = int(input())
calc = 0

# 구매한 물건의 종류의 갯수
n = input()

for i in range(int(n)):
    p, q = input().split()
    calc += int(p) * int(q)

if calc == total:
    print('Yes')
else:
    print('No')

