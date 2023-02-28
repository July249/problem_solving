import sys

# 출석부 생성
lst = []
for i in range(1, 31):
  lst.append(i)

while True:
  try:
    num = int(sys.stdin.readline())
    lst.pop(lst.index(num))
  except:
    break

print(min(lst))
print(lst[lst.index(min(lst)) + 1])


