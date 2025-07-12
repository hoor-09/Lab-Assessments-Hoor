from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

# Initialize database
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT
        )
    ''')
    c.execute('DELETE FROM users')  # Clear old users
    c.execute("INSERT INTO users (username, password) VALUES (?, ?)", ("admin", "admin123"))
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def login_page():
    return render_template('login.html')

# Vulnerable to SQL injection
@app.route('/login-vulnerable', methods=['POST'])
def login_vulnerable():
    username = request.form['username']
    password = request.form['password']

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    print("Vulnerable SQL:", query)
    c.execute(query)
    result = c.fetchone()
    conn.close()

    if result:
        return f"<h3> Welcome, {username} (vulnerable login)!</h3>"
    return "<h3> Invalid credentials (vulnerable login).</h3>"

#  Safe with parameterized queries
@app.route('/login-safe', methods=['POST'])
def login_safe():
    username = request.form['username']
    password = request.form['password']

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    result = c.fetchone()
    conn.close()

    if result:
        return f"<h3>Welcome, {username} (safe login)!</h3>"
    return "<h3>Invalid credentials (safe login).</h3>"

if __name__ == '__main__':
    app.run(debug=True)
