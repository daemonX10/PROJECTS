# # # backend/app.py
# # from flask import Flask, request, jsonify
# # import numpy as np
# # import pandas as pd
# # from sklearn.linear_model import LinearRegression

# # app = Flask(__name__)

# # # Generate synthetic data for example
# # np.random.seed(42)
# # data = {
# #     'month': pd.date_range(start='2022-01-01', periods=24, freq='M'),
# #     'food_expense': np.random.normal(loc=300, scale=50, size=24),
# #     'loan_expense': np.random.normal(loc=200, scale=30, size=24),
# #     'other_expenses': np.random.normal(loc=150, scale=40, size=24),
# #     'income': np.random.normal(loc=3000, scale=200, size=24)
# # }

# # df = pd.DataFrame(data)
# # df['total_expenses'] = df[['food_expense', 'loan_expense', 'other_expenses']].sum(axis=1)
# # df['savings'] = df['income'] - df['total_expenses']

# # # Prepare the data for the model
# # X = df[['food_expense', 'loan_expense', 'other_expenses', 'income']]
# # y = df['savings']

# # # Train the model
# # model = LinearRegression()
# # model.fit(X, y)

# # # Endpoint to get prediction
# # @app.route('/predict', methods=['POST'])
# # def predict_savings():
# #     data = request.json
# #     expenses = data['expenses']
# #     income = data['income']
# #     features = np.array([expenses['food'], expenses['loan'], expenses['other'], income]).reshape(1, -1)
# #     predicted_savings = model.predict(features)[0]
# #     return jsonify({'predicted_savings': predicted_savings})

# # # Endpoint to estimate time to goal
# # @app.route('/estimate', methods=['POST'])
# # def estimate_time_to_goal():
# #     data = request.json
# #     expenses = data['expenses']
# #     income = data['income']
# #     goal_amount = data['goal_amount']
# #     initial_savings = data['initial_savings']
# #     monthly_savings = predict_savings(expenses, income)
# #     if monthly_savings <= 0:
# #         return jsonify({'months_needed': float('inf')})  # Infinite time if savings are non-positive
# #     months_needed = (goal_amount - initial_savings) / monthly_savings
# #     return jsonify({'months_needed': months_needed})

# # def predict_savings(expenses, income):
# #     features = np.array([expenses['food'], expenses['loan'], expenses['other'], income]).reshape(1, -1)
# #     predicted_savings = model.predict(features)
# #     return predicted_savings[0]

# # if __name__ == '__main__':
# #     app.run(debug=True)

# # backend/app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import numpy as np
# import pandas as pd
# from sklearn.linear_model import LinearRegression

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Generate synthetic data for example
# np.random.seed(42)
# data = {
#     'month': pd.date_range(start='2022-01-01', periods=24, freq='M'),
#     'food_expense': np.random.normal(loc=300, scale=50, size=24),
#     'loan_expense': np.random.normal(loc=200, scale=30, size=24),
#     'other_expenses': np.random.normal(loc=150, scale=40, size=24),
#     'income': np.random.normal(loc=3000, scale=200, size=24)
# }

# df = pd.DataFrame(data)
# df['total_expenses'] = df[['food_expense', 'loan_expense', 'other_expenses']].sum(axis=1)
# df['savings'] = df['income'] - df['total_expenses']

# # Prepare the data for the model
# X = df[['food_expense', 'loan_expense', 'other_expenses', 'income']]
# y = df['savings']

# # Train the model
# model = LinearRegression()
# model.fit(X, y)

# # Endpoint to get prediction
# @app.route('/predict', methods=['POST'])
# def predict_savings():
#     data = request.json
#     expenses = data['expenses']
#     income = data['income']
#     features = np.array([expenses['food'], expenses['loan'], expenses['other'], income]).reshape(1, -1)
#     predicted_savings = model.predict(features)[0]
#     return jsonify({'predicted_savings': predicted_savings})

# # Endpoint to estimate time to goal
# @app.route('/estimate', methods=['POST'])
# def estimate_time_to_goal():
#     data = request.json
#     expenses = data['expenses']
#     income = data['income']
#     goal_amount = data['goal_amount']
#     initial_savings = data['initial_savings']
#     monthly_savings = predict_savings(expenses, income)
#     if monthly_savings <= 0:
#         return jsonify({'months_needed': float('inf')})  # Infinite time if savings are non-positive
#     months_needed = (goal_amount - initial_savings) / monthly_savings
#     return jsonify({'months_needed': months_needed})

# def predict_savings(expenses, income):
#     features = np.array([expenses['food'], expenses['loan'], expenses['other'], income]).reshape(1, -1)
#     predicted_savings = model.predict(features)
#     return predicted_savings[0]

# if __name__ == '__main__':
#     app.run(debug=True)

# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Enable CORS for your frontend origin

# Generate synthetic data for example
np.random.seed(42)
data = {
    'month': pd.date_range(start='2022-01-01', periods=24, freq='M'),
    'food_expense': np.random.normal(loc=300, scale=50, size=24),
    'loan_expense': np.random.normal(loc=200, scale=30, size=24),
    'other_expenses': np.random.normal(loc=150, scale=40, size=24),
    'income': np.random.normal(loc=3000, scale=200, size=24)
}

df = pd.DataFrame(data)
df['total_expenses'] = df[['food_expense', 'loan_expense', 'other_expenses']].sum(axis=1)
df['savings'] = df['income'] - df['total_expenses']

# Prepare the data for the model
X = df[['food_expense', 'loan_expense', 'other_expenses', 'income']]
y = df['savings']

# Train the model
model = LinearRegression()
model.fit(X, y)

# Endpoint to get prediction
@app.route('/predict', methods=['POST'])
def predict_savings():
    data = request.json
    expenses = data['expenses']
    income = data['income']
    features = np.array([float(expenses['food']), float(expenses['loan']), float(expenses['other']), income]).reshape(1, -1)
    print('feature from pridict_savings', features)
    predicted_savings = model.predict(features)[0]
    return jsonify({'predicted_savings': predicted_savings})

# Endpoint to estimate time to goal
@app.route('/estimate', methods=['POST'])
def estimate_time_to_goal():
    data = request.json
    print(data)
    expenses = data['expenses']
    income = float(data['income'])
    goal_amount = float(data['goal_amount'])
    initial_savings = float(data['initial_savings'])
    monthly_savings = predict_savings(expenses, income)
    if monthly_savings <= 0:
        return jsonify({'months_needed': float('inf')})  # Infinite time if savings are non-positive
    months_needed = (goal_amount - initial_savings) / monthly_savings
    return jsonify({'months_needed': months_needed})

def predict_savings(expenses, income):
    features = np.array([float(expenses['food']), float(expenses['loan']), float(expenses['other']), float(income)]).reshape(1, -1)
    print('feature from predict_savings()', features)
    predicted_savings = model.predict(features)
    return predicted_savings[0]

if __name__ == '__main__':
    app.run(debug=True)
