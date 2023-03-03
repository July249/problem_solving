# 단어의 개수
sentence = input()

arr = sentence.split(' ')

result = []

for i in range(len(arr)):
    if bool(arr[i]) == True:
        result.append(arr[i])

print(len(result))