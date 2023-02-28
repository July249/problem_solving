h, m = input().split()
max_min = 60 * 24
w = 60 * int(h) + int(m)
t = w - 45

if t >= 0:
    print(str(t // 60) + " " + str(t % 60))
elif t < 0:
    print(str((max_min + t) // 60) + " " + str((max_min + t) % 60))