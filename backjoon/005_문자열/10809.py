# 알파벳 찾기

alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = ['-1'] * len(alphabet)

S = input()

for i in range(len(alphabet)):
    if S.find(alphabet[i]) != -1:
        indexOfS = S.find(alphabet[i])
        result[i] = str(indexOfS)

print(' '.join(result))