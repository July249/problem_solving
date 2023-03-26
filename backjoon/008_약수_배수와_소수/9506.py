# 약수들의 합
import math

divisionArr = []

while True:
    n = int(input())
    if (n == -1):
        break
    
    half = math.floor(math.sqrt(n))

    for i in range(half):
        if (n % (i + 1) == 0):
            divisionArr.append(i + 1)
            divisionArr.append(n // (i + 1))
    
    divisionArr.sort()

    testValue = 0
    for i in range(len(divisionArr) - 1):
        # print(divisionArr[i])
        testValue += int(divisionArr[i])
        # print(testValue)
    
    if (testValue == divisionArr[len(divisionArr) - 1]):
        answer = f'{n} = 1'
        for i in range(1, len(divisionArr) - 1):
            answer += f' + {divisionArr[i]}'
        
        print(answer)
    else:
        print(f'{n} is NOT perfect.')
    
    divisionArr = []