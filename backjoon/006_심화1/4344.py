# 평균은 넘겠지

# 테스트 케이스의 갯수
C = int(input())

while C > 0:
    # 학생 수, 학생 수 만큼의 성적 점수
    data = list(input().split())
    # 학생 수
    N = int(data[0])
    # 학생들의 성적
    score = data[1:]

    # score에 있는 리스트 요소의 타입 변환 (str -> float)
    for i in range(N):
        score[i] = float(score[i])

    score_sum = sum(score)
    avg = score_sum / len(score)

    # over average count
    count = 0
    for i in score:
        if i > avg:
            count += 1
    
    print(format(count / N * 100, ".3f") + '%')
    
    C -= 1
