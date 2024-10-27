x = int(input("Enter x: "))

current_odd = 1

for i in range(1, x + 1):
    row = []
    current_odd = 1
    for j in range(i):
        row.append(str(current_odd))
        current_odd += 2
    print(" ".join(row))