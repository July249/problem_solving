# 더하기 사이클

n = int(input())
count = 0
new_n = n

while True:
    count += 1
    ten = new_n // 10
    one = new_n % 10
    new_n = one * 10 + (ten + one) % 10
    if new_n == n:
        break
    
print(count)