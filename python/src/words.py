import json
import csv

def retrieve_books(file):
    return json.load(file)

def count_books(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calc_perc(book_count, total_books):
    return [
        [category, round(num_books / total_books, 3)]
        for category, num_books in book_count.items()
    ]

def writecsv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)

if __name__ == "__main__":
    with open('books.json') as file:
        books = retrieve_books(file)
    
    book_count = count_books(books)

    calc = calc_perc(book_count, len(books))

    with open('report.csv', 'w') as file:
        writecsv(file, ['Category', 'Percentage'], calc)

