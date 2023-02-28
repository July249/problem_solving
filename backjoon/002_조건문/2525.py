h, m = input().split()
c = input()
max_min = 60 * 24
w = 60 * int(h) + int(m) # 현재시간을 분으로 환산
t = w + int(c) # 조리 후 시간을 분으로 환산

if t >= max_min:
    print(str((t - max_min) // 60) + " " + str((t - max_min) % 60))
elif t < max_min:
    print(str((t) // 60) + " " + str((t) % 60))