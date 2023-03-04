word = input()
word_lst = list(word)

reversed_lst = list(reversed(word_lst))
reversed_word = ''.join(reversed_lst)

if word == reversed_word:
    print(1)
else:
    print(0)