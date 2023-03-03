# 다이얼

dial = ['', '', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz', '']

words = input().lower()
number = []
time = 0

for word in words:
    for i, v in enumerate(dial):
        if word in v:
            number.append(i)

for i in number:
    time += i

print(time)