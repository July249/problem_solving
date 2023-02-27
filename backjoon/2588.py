a = int(input())
b = input()
c = 0
for i in range(len(b) - 1, -1, -1):
    print(a * int(b[i]))
    
print(a * int(b))