from flask import Flask, render_template, url_for
from datetime import datetime

app = Flask(__name__)
now = datetime.now()

with open("notes.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

@app.route('/')
def index():
	balance = f"{lines[0]}₽"

	m = lines[1].split()
	m2 = lines[4].split()
	per_month = f"+{m[now.month - 1]}₽"

	prev = int(m[now.month - 2])
	curr = int(m[now.month - 1])

	if prev == 0:
			percent = "—"
	else:
			formula = (curr - prev) / prev * 100
	formula2 = int(lines[0]) - int(m[now.month - 1]) + int(m2[now.month - 1])


	formula3 = 100-(formula2/int(lines[0])*100)
	percent = f"↗ +{round(formula)}%"
	percent2 = f"↗ +{round(formula3)}%"

	income_data = [int(x) for x in lines[1].split()]
	income = int(lines[2])
	expenses = abs(int(lines[3]))
	return render_template("index.html", balance=balance, per_month=per_month, percent=percent, percent2=percent2,
												 income_data=income_data, income=income, expenses=expenses)

@app.route('/home')
@app.route('/дом')
def index_home():
	return "Hello in home!"

if __name__ == "__main__":
	app.run(debug=True)