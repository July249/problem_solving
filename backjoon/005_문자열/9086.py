T = int(input())

while T > 0:
    a = input()

    if len(a) == 1:
        print(a[0] * 2)
    else:
      print(a[0] + a[len(a) - 1])
      
    T -= 1
