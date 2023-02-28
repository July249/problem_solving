i = 1
num_lst = []
while i < 10:
    num = int(input())
    num_lst.append(num)
    i += 1

print(max(num_lst), num_lst.index(max(num_lst)) + 1)



