# 킹, 퀸, 룩, 비숍, 나이트, 폰

found_piece = list(map(int, input().split()))
perfect_piece = [1, 1, 2, 2, 2, 8]

result = []

for i in range(len(perfect_piece)):
    result.append(str(perfect_piece[i] - found_piece[i]))

print(' '.join(result))
