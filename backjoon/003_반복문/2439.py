n = int(input())

a = "*"
b = " "

for i in range(n):
    print(b * (n - (i + 1)) + a * (i + 1));
