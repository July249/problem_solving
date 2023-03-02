# 단어 공부

alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = [0] * len(alphabet)

s = input().lower()

for i in range(len(s)):
    indexOfAlphabet = alphabet.find(s[i])
    result[indexOfAlphabet] += 1

indexArray = []

for i, v in enumerate(result):
    if v == max(result):
        indexArray.append(i)

if len(indexArray) <= 1:
    print(alphabet[indexArray[0]].upper())
else:
    print('?')
