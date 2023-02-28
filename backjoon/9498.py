point = int(input())

if point >= 90:
    print('A')
elif point >= 80 and point < 90:
    print('B')
elif point >= 70 and point < 80:
    print('C')
elif point >= 60 and point < 70:
    print('D')
else:
    print('F')