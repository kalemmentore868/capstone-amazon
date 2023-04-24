import React from 'react'
import { OrderObj } from '../helper/types'
import { formatTime } from '../helper/UsefulFuntions'
import OrderItem from './OrderItem'

interface props {
    order: OrderObj
}

const OrderReceipt: React.FC<props> = ({ order }) => {

    const orderedAt = formatTime(order.created_at)

    return (
        <div >
            <h2 className="my-2 fs-1">Order #{order.id}</h2>

            <div className="my-2">
                {order.items.map((item) => <OrderItem key={item.productId} orderItem={item} />)}

            </div>

            <p className="text-start fs-3">Total: ${order.total.toFixed(2)}</p>
            <p className="text-start text-muted">Ordered on {orderedAt.formattedDate}, {orderedAt.formattedTime}</p>
        </div>

    )
}

export default OrderReceipt