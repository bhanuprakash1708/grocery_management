// Enhanced Dashboard with Sample Data and API Integration
$(function () {
    // Initialize dashboard
    initializeDashboard();

    // Try to load real data from API
    if (typeof orderListApiUrl !== 'undefined') {
        $.get(orderListApiUrl, function (response) {
            if(response) {
                populateOrdersTable(response);
                updateStatistics(response);
            }
        }).fail(function() {
            console.log("API not available - Loading sample data");
            loadSampleData();
        });
    } else {
        // Load sample data if API URL is not defined
        loadSampleData();
    }
});

function initializeDashboard() {
    // Initialize statistics with zeros
    $('#totalOrders').text('0');
    $('#totalProducts').text('0');
    $('#totalRevenue').text('₹0');
    $('#totalCustomers').text('0');

    // Add loading animation
    $('.stats-card .number').each(function() {
        $(this).html('<i class="fas fa-spinner fa-spin"></i>');
    });

    setTimeout(function() {
        $('.stats-card .number i').remove();
    }, 1000);
}

function loadSampleData() {
    // Sample orders data for demonstration
    const sampleOrders = [
        {
            order_id: 'ORD001',
            datetime: '2024-01-15 10:30:00',
            customer_name: 'John Doe',
            total: 450.75
        },
        {
            order_id: 'ORD002',
            datetime: '2024-01-14 15:45:00',
            customer_name: 'Jane Smith',
            total: 320.50
        },
        {
            order_id: 'ORD003',
            datetime: '2024-01-14 09:20:00',
            customer_name: 'Mike Johnson',
            total: 180.25
        },
        {
            order_id: 'ORD004',
            datetime: '2024-01-13 14:15:00',
            customer_name: 'Sarah Wilson',
            total: 275.00
        },
        {
            order_id: 'ORD005',
            datetime: '2024-01-13 11:30:00',
            customer_name: 'David Brown',
            total: 395.80
        }
    ];

    populateOrdersTable(sampleOrders);
    updateStatistics(sampleOrders);
}

function populateOrdersTable(orders) {
    var table = '';
    var totalCost = 0;

    $.each(orders, function(index, order) {
        totalCost += parseFloat(order.total);
        table += '<tr data-id="'+ order.order_id +'" data-name="'+ order.customer_name +'" data-total="'+ order.total +'" data-dt="'+ order.datetime +'">' +
            '<td><i class="fas fa-calendar-alt mr-2 text-muted"></i>'+ formatDate(order.datetime) +'</td>'+
            '<td><span class="badge badge-primary">'+ order.order_id +'</span></td>'+
            '<td><i class="fas fa-user mr-2 text-muted"></i>'+ order.customer_name +'</td>'+
            '<td><strong>₹'+ parseFloat(order.total).toFixed(2) +'</strong></td>'+
            '<td>' +
                '<button class="btn btn-sm btn-modern btn-success mr-1" onclick="viewOrder(\''+ order.order_id +'\')" title="View Order">' +
                    '<i class="fas fa-eye"></i>' +
                '</button>' +
                '<button class="btn btn-sm btn-modern btn-danger" onclick="deleteOrder(\''+ order.order_id +'\')" title="Delete Order">' +
                    '<i class="fas fa-trash"></i>' +
                '</button>' +
            '</td>'+
            '</tr>';
    });

    $("#ordersTableBody").html(table);
}

function updateStatistics(orders) {
    // Calculate statistics
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.total), 0);
    const uniqueCustomers = [...new Set(orders.map(order => order.customer_name))].length;

    // Animate counter updates
    animateCounter('#totalOrders', totalOrders);
    animateCounter('#totalRevenue', '₹' + totalRevenue.toFixed(2));
    animateCounter('#totalCustomers', uniqueCustomers);
    animateCounter('#totalProducts', 25); // Sample product count
}

function animateCounter(selector, finalValue) {
    const element = $(selector);
    const isNumber = typeof finalValue === 'number';
    const target = isNumber ? finalValue : parseInt(finalValue.replace(/[^\d.]/g, ''));

    if (isNumber || !isNaN(target)) {
        let current = 0;
        const increment = Math.ceil(target / 20);
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            if (isNumber) {
                element.text(current);
            } else {
                element.text(finalValue.replace(/[\d.]+/, current));
            }
        }, 50);
    } else {
        element.text(finalValue);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }) + ' ' + date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Enhanced order actions
function viewOrder(orderId) {
    showNotification('Viewing order ' + orderId, 'info');
    // Add actual view logic here
}

function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete order ' + orderId + '?')) {
        showNotification('Order ' + orderId + ' deleted successfully', 'success');
        // Add actual delete logic here
        $('tr[data-id="' + orderId + '"]').fadeOut(300, function() {
            $(this).remove();
        });
    }
}

function showNotification(message, type) {
    const alertClass = type === 'success' ? 'alert-success' :
                      type === 'error' ? 'alert-danger' : 'alert-info';
    const icon = type === 'success' ? 'fa-check-circle' :
                 type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';

    const notification = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert" style="position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
            <i class="fas ${icon} mr-2"></i>
            ${message}
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
            </button>
        </div>
    `;

    $('body').append(notification);

    setTimeout(function() {
        $('.alert').fadeOut();
    }, 3000);
}