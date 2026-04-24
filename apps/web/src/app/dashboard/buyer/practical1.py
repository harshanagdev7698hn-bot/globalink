import secrets 
import string 
import re 
def generate_strong_password(length=12): 
if length < 12: 
raise ValueError("Password length should be at least 12 characters 
for best practices.") 
characters = string.ascii_letters + string.digits + string.punctuation 
while True: 
password = ''.join(secrets.choice(characters) for _ in range(length)) 
# Ensure at least one lower, upper, digit, symbol 
if (re.search(r"[a-z]", password) and 
re.search(r"[A-Z]", password) and 
re.search(r"\d", password) and 
re.search(r"[!@#$%^&*(),.?\":{}|<>]", password)): 
return password 
def test_password_strength(password): 
length_criteria = len(password) >= 12 
lower_criteria = re.search(r"[a-z]", password) is not None 
upper_criteria = re.search(r"[A-Z]", password) is not None 
digit_criteria = re.search(r"\d", password) is not None 
symbol_criteria = re.search(r"[!@#$%^&*(),.?\":{}|<>]", password) is 
not None 
score = sum([length_criteria, lower_criteria, upper_criteria, 
digit_criteria, symbol_criteria]) 
if score == 5: 
return "Strong password" 
elif score >= 3: 
return "Moderate password" 
else: 
return "Weak password" 
# Generate and test password 
pwd = generate_strong_password() 
print("Generated Password:", pwd) 
print("Strength Test Result:", test_password_strength(pwd))