from flask import Flask, render_template, request, redirect

app = Flask(__name__)

class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

book = Book('Dom Casmurro', 'Machado de Assis', 1899)

@app.route('/book')
def book_view():
    return render_template('book.html', book=book)

class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price

products = []

@app.route('/')
def products_view():
    return render_template('products.html', products=products)

@app.route('/', methods=['POST'])
def add_product():
    id = len(products) + 1
    name = request.form['name']
    price = float(request.form['price'])
    product = Product(id, name, price)
    products.append(product)
    return redirect('/')

@app.route('/delete/<int:product_id>')
def delete_product(product_id):
    for product in products:
        if product.id == product_id:
            products.remove(product)
            break
    return redirect('/')

if __name__ == '__main__':
    app.run()