import requests

# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)

# response = requests.get("https://api.github.com/users")
# users = response.json()

# for user in users:
#     print(f"{user['login']} {user['url']}")

# first_user = users[0]
# print(f"{first_user['login']} {first_user['url']}")

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response.text
print(response.status_code)