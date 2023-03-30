# 소인수분해

# 아래의 코드는 시간초과가 발생한다.
# N = int(input())

# def get_prime(N):
#     prime = []
#     for i in range(2, N + 1):
#         is_prime = True
#         for j in range(2, i):
#             if i % j == 0:
#                 is_prime = False
#                 break
#         if is_prime:
#             prime.append(i)
#     return prime

# prime = get_prime(N)
# result = []
# for i in prime:
#     while N % i == 0:
#         result.append(i)
#         N = N // i

# for i in result:
#     print(i)

# 아래의 코드는 시간초과가 발생하지 않는다.
# (출처: https://codinghani.tistory.com/5)
N = int(input())

if N == 1:
    print('')

for i in range(2, N + 1):
    if N % i == 0:
        while N % i == 0:
            print(i)
            N = N // i
