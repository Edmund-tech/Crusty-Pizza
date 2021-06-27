function Order(type,size,price){
    this.items = items
    this.size = this.items.length
    this.price = price
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
    let currentItem = this.items[item.id] || {}
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

