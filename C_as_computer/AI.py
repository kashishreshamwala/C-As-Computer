# from flask import Flask, request, jsonify, render_template, session
# import requests

# app = Flask(__name__)
# app.secret_key = "your_secret_key"  # Required for session management

# GEMINI_API_KEY = "AIzaSyD9FAPV1Yf2ymgUgqlnvU9ErmBNccAwgOA"
# API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"

# # Utility to fetch API response
# def fetch_api_response(user_message):
#     payload = {
#         "contents": [
#             {
#                 "role": "user",
#                 "parts": [{"text": user_message}]
#             }
#         ]
#     }
#     try:
#         response = requests.post(API_URL, json=payload)
#         response.raise_for_status()
#         data = response.json()
#         api_response = data.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', '')
#         return api_response.replace("**", "")  # Remove asterisks if any
#     except requests.RequestException as e:
#         return f"Error: {str(e)}"

# @app.route('/')
# def index():
#     saved_chats = session.get('saved_chats', [])
#     theme_color = session.get('theme_color', 'dark_mode')
#     return render_template('index.html', saved_chats=saved_chats, theme_color=theme_color)

# @app.route('/send_message', methods=['POST'])
# def send_message():
#     user_message = request.json.get('message')
#     if not user_message:
#         return jsonify({"error": "No message provided"}), 400

#     api_response = fetch_api_response(user_message)
#     chat_entry = {"user": user_message, "response": api_response}

#     saved_chats = session.get('saved_chats', [])
#     saved_chats.append(chat_entry)
#     session['saved_chats'] = saved_chats  # Save chat in session

#     return jsonify(chat_entry)

# @app.route('/delete_chats', methods=['POST'])
# def delete_chats():
#     session.pop('saved_chats', None)  # Clear saved chats
#     return jsonify({"message": "Chats deleted successfully"})

# @app.route('/toggle_theme', methods=['POST'])
# def toggle_theme():
#     current_theme = session.get('theme_color', 'dark_mode')
#     new_theme = 'light_mode' if current_theme == 'dark_mode' else 'dark_mode'
#     session['theme_color'] = new_theme
#     return jsonify({"theme": new_theme})

# if __name__ == '__main__':
#     app.run(debug=True)
