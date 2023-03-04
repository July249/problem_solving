grade_dict = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0
}

result_lst = []
credit_lst = []
grade_lst = []
avg_credit = 0

while True:
    try:
        subject = list(input().split())[1:]
        # P 학점은 계산을 안할 것이므로 그냥 지나친다.
        if subject[1] == 'P':
            continue

        credit_lst.append(float(subject[0]))
        grade_lst.append(subject[1])

    except:
        break

# 등급을 문자에서 값으로 변경
for i in range(len(grade_lst)):
    grade_lst[i] = grade_dict[grade_lst[i]]

for i in range(len(grade_lst)):
    result_lst.append(grade_lst[i] * credit_lst[i])

avg_credit = sum(result_lst) / sum(credit_lst)
print(format(avg_credit, '.6f'))