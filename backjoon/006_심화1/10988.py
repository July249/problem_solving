word = input()
word_lst = list(word)

reversed_lst = []

for i in range(len(word_lst) - 1, -1, -1):
    reversed_lst.append(word[i])

reversed_word = ''.join(reversed_lst)
if word == reversed_word:
    print(1)
else:
    print(0)