N = int(input())
num_test = N
count = 0

while num_test > 0:
    word_lst = list(input())
    distinct_set = []
    before = ''

    for i in range(len(word_lst)):    
        if before != word_lst[i]:
            before = word_lst[i]
            if word_lst[i] not in distinct_set:
                distinct_set.append(word_lst[i])
            else:
                count += 1
                break

        else:
            continue

    num_test -=1 

print(N - count)