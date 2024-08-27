def calculate_area(radius):
    pi = 3.14
    area = pi * radius ** 2
    return area

# Function call with a typo in the function name
result = calculate_are(5)
print("Area:", result)
