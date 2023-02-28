# N = int(input())

# # input을 리스트로 받아오는 방법
# # 1 4 1 2 4 2 4 2 3 4 4
# s = list(input().split()) # ['1', '4', '1', '2', '4', '2', '4', '2', '3', '4', '4']
# v = input()
# print(int(''.join(s).find(v)) if ''.join(s).find(v) != -1 else  0 ) # s의 리스트 요소들을 공백 없이 이어 붙일 때 사용

n = int(input())
arr = list(input().split())
v = int(input())

count = 0
for i in range(n):
    if int(arr[i]) == v:
        count += 1
    else:
        continue

print(count)