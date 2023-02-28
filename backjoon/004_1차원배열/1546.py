N = int(input())
score_list = [*map(int, input().split())]
M = max(score_list)

new_score_list = []

for score in score_list:
    new_score_list.append(score / M * 100)

print(sum(new_score_list) / N)

