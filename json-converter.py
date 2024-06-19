import json
import csv

# Assuming data is loaded from 'data.json'
with open('sarcasm.json', encoding='utf-8') as file:
    data = json.load(file)


csv_file = "sarcasm.csv"
csv_columns = data[0].keys()

try:
    # Open the file with 'w' mode, newline='', and add the utf-8-sig encoding for BOM
    with open(csv_file, 'w', newline='', encoding='utf-8-sig') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns, delimiter=',')  # Ensure delimiter is set to comma
        writer.writeheader()
        for exercise in data:
            writer.writerow(exercise)
except IOError:
    print("I/O error")
