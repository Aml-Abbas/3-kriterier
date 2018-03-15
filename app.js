var form= document.getElementById('to-do-form');
var array=[];
form.addEventListener('submit', function(e){
e.preventDefault();
var input= document.getElementById('to-do-input').value;



var add  = function(array, location){
    var template=array.map(function(item,id){
return `
<li id="${id}" >${item.item} - <button class="delete" type="button"> X </button>
</li><br>
`;
    });
    $(location).html(template);
};

var additem=function(array,item){
    array.push({item});

};
additem(array,input);
add(array,$('.lastlist'));


add(array,$('.lastlist'));

var deleteItem=function(array,item){
    array.splice(item, 1);
    add(array, $('.lastlist'));
};

$('.lastlist').on('click', '.delete', function (event) {

   var itemToDelete = $(event.currentTarget).closest('li').remove();
  
});

});



