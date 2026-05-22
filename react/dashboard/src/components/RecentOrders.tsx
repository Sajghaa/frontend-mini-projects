export default function RecentOrders() {
  const orders = [
    { id: 1, product: 'Wireless Headphones', customer: 'Alice', amount: '$89', status: 'Delivered' },
    { id: 2, product: 'Smart Watch', customer: 'Bob', amount: '$199', status: 'Processing' },
    { id: 3, product: 'USB-C Hub', customer: 'Charlie', amount: '$45', status: 'Shipped' },
    { id: 4, product: 'Mechanical Keyboard', customer: 'Diana', amount: '$129', status: 'Delivered' },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b dark:border-gray-700">
            <tr><th className="text-left py-2">Product</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="py-2">{order.product}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                    ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : ''}
                  `}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}