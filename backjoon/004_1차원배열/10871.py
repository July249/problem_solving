N, X = map(int, input().split())
lst = list(input().split())
new = []
for i in filter(lambda num: int(num) < X, lst):
    new.append(i)

print(' '.join(new))