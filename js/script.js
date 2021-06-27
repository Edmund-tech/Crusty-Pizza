function Order(){
    this.items = {}
    this.size = Object.keys(this.items).length
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
    this.items = this.items || {}
    let currentItem = this.items[item.id] || new OrderItem(item.id,0,item.price)
    currentItem.quantity = currentItem ++
    this.items[item.id] = currentItem
}
Order.prototype.getTotal = function(){
    var total = 0
    for(const item in this.items){
        var currentItem = this.items[item]
        var currentTotal = currentItem.price * currentItem.quantity
        total = total + currentTotal 
    }
    this.total = total
        return total
}
$(document).ready(function(){
    $( ".clickable").on('click',function(e){
        console.log(e)
        console.log(e.target.id)
        console.log($('#' + e.target.id).data())

        var itemID = e.target.id
        var itemData = $('#' + itemID)
    })
})

