N = int(input())
lst = list(input().split())
num_lst = []

for i in range(N):
    num_lst.append(int(lst[i]))

print(min(num_lst))
print(max(num_lst))