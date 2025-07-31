# 🛒 Grocery Store Management System

A modern, web-based grocery store management system built with Python Flask backend and enhanced HTML/CSS/JavaScript frontend. This application helps manage products, orders, and customer transactions efficiently.

## ✨ Features

### 📊 Dashboard
- Real-time statistics display (Total Orders, Products, Revenue, Customers)
- Recent orders overview with search and filter capabilities
- Modern card-based layout with animated counters
- Responsive design for all devices

### 📦 Product Management
- Add, edit, and delete products
- Manage product details (name, price, unit of measurement)
- Product statistics and analytics
- Bulk operations support

### 🛍️ Order Management
- Create new orders with multiple products
- Real-time price calculation
- Customer information management
- Order history and tracking

### 🎨 Modern UI/UX
- Beautiful gradient backgrounds with glass morphism effects
- Smooth animations and hover effects
- Professional typography using Inter font
- Mobile-responsive design
- Enhanced form controls and modals

## 🚀 Getting Started

### Prerequisites
- Python 3.7 or higher
- MySQL database
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd python_projects_grocery_webapp
   ```

2. **Install Python dependencies**
   ```bash
   pip install flask
   pip install mysql-connector-python
   ```

3. **Database Setup**
   - Create a MySQL database
   - Import the database schema (tables: products, uom, orders, order_details)
   - Update database connection settings in `backend/sql_connection.py`

4. **Run the application**
   ```bash
   cd backend
   python server.py
   ```

5. **Access the application**
   - Open your web browser
   - Navigate to `http://localhost:5000`
   - Or open `ui/index.html` directly for frontend-only demo

## 📁 Project Structure

```
python_projects_grocery_webapp/
├── backend/
│   ├── server.py              # Flask application server
│   ├── products_dao.py        # Product data access operations
│   ├── orders_dao.py          # Order data access operations
│   ├── uom_dao.py            # Unit of measurement operations
│   └── sql_connection.py     # Database connection configuration
├── ui/
│   ├── index.html            # Dashboard page
│   ├── manage-product.html   # Product management page
│   ├── order.html           # Order creation page
│   ├── css/
│   │   ├── custom.css       # Enhanced modern styling
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   ├── js/
│   │   ├── custom/
│   │   │   ├── dashboard.js  # Dashboard functionality
│   │   │   ├── manage-product.js
│   │   │   ├── order.js
│   │   │   └── common.js
│   │   └── packages/
│   │       ├── jquery.min.js
│   │       └── bootstrap.min.js
│   └── images/
└── README.md
```

## 🛠️ Technology Stack

### Backend
- **Python Flask** - Web framework
- **MySQL** - Database management
- **mysql-connector-python** - Database connectivity

### Frontend
- **HTML5** - Structure and semantics
- **CSS3** - Modern styling with gradients and animations
- **JavaScript/jQuery** - Interactive functionality
- **Bootstrap** - Responsive grid system
- **Font Awesome** - Modern iconography

## 📱 API Endpoints

### Products
- `GET /getProducts` - Retrieve all products
- `POST /insertProduct` - Add new product
- `POST /updateProduct` - Update existing product
- `POST /deleteProduct` - Delete product

### Orders
- `GET /getOrders` - Retrieve all orders
- `POST /insertOrder` - Create new order
- `POST /deleteOrder` - Delete order

### Units of Measurement
- `GET /getUOM` - Retrieve all units of measurement

## 🎨 UI Features

### Modern Design Elements
- Glass morphism effects with backdrop blur
- Gradient backgrounds and modern color schemes
- Smooth hover animations and transitions
- Professional typography and spacing

### Enhanced User Experience
- Real-time form validation
- Loading states and progress indicators
- Toast notifications for user feedback
- Responsive design for mobile devices

### Interactive Components
- Animated statistics counters
- Modern modal dialogs
- Enhanced form controls
- Action buttons with visual feedback

## 🔧 Configuration

### Database Configuration
Update `backend/sql_connection.py` with your database credentials:
```python
def get_sql_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='your_username',
        password='your_password',
        database='your_database_name'
    )
    return connection
```

### Server Configuration
The Flask server runs on `localhost:5000` by default. You can modify the host and port in `server.py`.

## 📊 Database Schema

### Tables
- **products** - Product information (id, name, uom_id, price_per_unit)
- **uom** - Units of measurement (uom_id, uom_name)
- **orders** - Order headers (order_id, customer_name, total, datetime)
- **order_details** - Order line items (order_id, product_id, quantity, total_price)

## 🚀 Usage

1. **Managing Products**
   - Navigate to "Manage Products" page
   - Add new products with name, unit, and price
   - Edit or delete existing products

2. **Creating Orders**
   - Go to "New Order" page
   - Enter customer name
   - Add products to the order
   - Review and save the order

3. **Viewing Dashboard**
   - Monitor key statistics
   - View recent orders
   - Access quick actions

## 🔍 Troubleshooting

### Common Issues
- **Database Connection Error**: Check MySQL service and credentials
- **Port Already in Use**: Change the port in server.py
- **Missing Dependencies**: Install required Python packages

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please create an issue in the repository or contact the development team.

---
