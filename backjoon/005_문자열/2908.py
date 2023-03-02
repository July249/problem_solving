# 상수

num1_lst, num2_lst = map(list, input().split())

reversed_num1_lst = list(reversed(num1_lst))
reversed_num2_lst = list(reversed(num2_lst))

reversed_num1 = ''.join(reversed_num1_lst)
reversed_num2 = ''.join(reversed_num2_lst)

if int(reversed_num1) > int(reversed_num2):
    print(int(reversed_num1))
else:
    print(int(reversed_num2))