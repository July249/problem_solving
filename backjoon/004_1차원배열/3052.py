arr = []

while True:
    try:
        num = int(input())
        arr.append(num % 42)
    except:
        break

print(set(arr))
print(len(set(arr)))