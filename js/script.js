function Order(){
    this.items = {}
    this.size = 0
    this.total = 0
}
function Item(price,type,id){
    this.price = price
    this.type = type
    this.id = id
}
function OrderItem(id,quantity,price){
    this.id = id
    this.quantity = quantity
    this.price = price
}
Order.prototype.addItem = function(item){
    console.log(item.id,item.price)
    this.items = this.items || {}
    let currentItem = this.items[item.id] || new OrderItem(item.id,1,item.price)
    this.items[item.id] = currentItem
    if(this.size === 0){
        this.size = 1
    $('#size').val(1)

    }
}
Order.prototype.getTotal = function(){
    var total = 0
    for(const item in this.items){
        var currentItem = this.items[item]
        var currentTotal = currentItem.price * currentItem.quantity
        total = total + currentTotal 
    }
    this.total = total
    $('#totalCost').text(total)
        return total
}
var order = new Order()
$(document).ready(function(){
    $( ".clickable").on('click',function(e){
        var properties = $('#' + e.target.id).data()
        var itemID = e.target.id
        var itemData = $('#' + itemID).data()
        var item = new Item(itemData.price,itemData.type,itemID)
        order.addItem(item)
        console.log(111,item)
        console.log(222,order)
        console.log(333,order.getTotal())
    })
    $('#size').on('change',function(e){
        var value = e.target.value
        if(Number.isInteger(value) && value>0){
            order.size = value
            order.getTotal()
        }else{
            alert("Invalid input")
        }
    })
})

