import json
import csv

# Assuming data is loaded from 'data.json'
with open('pandashark.json', encoding='utf-8') as file:
    data = json.load(file)

def flatten_json(y):
    out = {}

    def flatten(x, name=''):
        if type(x) is dict:
            for a in x:
                flatten(x[a], name + a + '_')
        elif type(x) is list:
            i = 0
            for a in x:
                flatten(a, name + str(i) + '_')
                i += 1
        else:
            out[name[:-1]] = x
    flatten(y)
    return out

all_flattened_exercises = []

for user_id, user_data in data["__collections__"]["users"].items():
    # remove "@noora.stanford.edu"
    if user_id[:-19] in ["pandashark"]:
        print(user_id[:-19])
        exercises = user_data["__collections__"]["exercises"]

        for exercise_id, exercise in exercises.items():
            flattened_exercise = flatten_json(exercise)
            flattened_exercise["user_id"] = user_id
            all_flattened_exercises.append(flattened_exercise)

# Define the field names in the desired order
csv_columns = [
    'user_id',
    'progress_statement',
    'progress_reply',
    'progress_explanation',
    'progress_goodAnswer',
    'stt',
    'progress_sentimentCorrectlyIdentified',
    'progress_sentimentGuessedByUser',
    'numProblems',
    'progress_sentimentGiven_0',
    'progress_sentimentGiven_1',
    'time_taken',
    'progress_currentProblemNumber',
    'timestamp_value__seconds'
]

if all_flattened_exercises:
    csv_file = "pandashark.csv"

    try:
        with open(csv_file, 'w', newline='', encoding='utf-8-sig') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=csv_columns, delimiter=',')
            writer.writeheader()
            for exercise in all_flattened_exercises:
                # Create a row dict with only the desired and ordered fields
                row = {field: exercise.get(field, None) for field in csv_columns}
                writer.writerow(row)
    except IOError:
        print("I/O error")
