word = input()
croatian_lst = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z=']

count = 0

# dz= 부터 확인해서 count의 초기값으로 설정 (z=와 혼동하지 않기 위함)
count = word.count(croatian_lst[0])

# word에서 dz= 제거
if word.find('dz=') != -1:
    word = word.replace('dz=', ' ') # ' '로 대체하는 이유: 예외 케이스 ddz=z= 

for i in range(1, len(croatian_lst)):
    count += word.count(croatian_lst[i])
    word = word.replace(croatian_lst[i], ' ') # ' '로 대체하는 이유: 예외 케이스 nljj 

if len(word) > 0:
    word = word.replace(' ', '')
    count += len(word)

print(count)