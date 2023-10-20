def calculate_dni_letter(number):
    letters = "TRWAGMYFPDXBNJZSQVHLCKE"
    return letters[number % 23]

def generate_dni(name):
    ascii_sum = sum(ord(char) for char in name if char.isalnum())

    number_part = (ascii_sum * 12345 + 67890) % 100000000

    letter = calculate_dni_letter(number_part)

    return f"{number_part:08d}{letter}"

name = input("Introduce tu nombre completo: ")

dni = generate_dni(name)
print(f"El DNI del usuario es: {dni}")