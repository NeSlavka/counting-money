from datetime import datetime

now = datetime.now()

with open("notes.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()


def drive(lines):
    with open("notes.txt", "w", encoding="utf-8") as f:
        f.writelines(lines)


choice = "Выбор: "



while True:
    print("1. Пополнение")
    print("2. Расход")
    print("3. Показать баланс")

    answer = input(choice)

    try:
        if answer == "1":
            answer2 = input("Сколько: ")
            lines[0] = f"{int(lines[0]) + int(answer2)}\n" # общий баланс
            lines[2] = f"{int(lines[2]) + int(answer2)}\n" # доход

            m = lines[1].split()
            idx = now.month - 1
            m[idx] = f"{int(m[idx]) + int(answer2)}" # месяц дахода
            lines[1] = " ".join(m) + "\n"

            drive(lines)

        elif answer == "2":
            answer2 = input("Сколько: ")
            lines[0] = f"{int(lines[0]) - int(answer2)}\n"
            lines[3] = f"{int(lines[3]) - int(answer2)}\n" #рассходы

            m2 = lines[4].split()
            idx2 = now.month - 1
            m2[idx2] = f"{int(m2[idx2]) - int(answer2)}" # месяц рассхода
            lines[4] = " ".join(m2) + "\n"

            drive(lines)

        elif answer == "3":
            print(lines[0])

    except:
        print('Ошибка')