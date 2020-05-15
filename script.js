// Shopping List App
// v4.0
//
// WEB-233: Introduction to Javascript
// Spring 2020
//
// Troy Sawtelle
//
// 2020-05-12 

var CookieList = 'sawtellelist';
var CookieCart = 'sawtellecart';
var TaxRate = 0.01;

var MyItems = 
{
  ItemName:"",
  ItemPrice:"",
  ItemDiv:", ",
  ItemQty:"",
  ItemDiv2:", ",
  ItemReq:""
};

var ShoppingList = [];
var ShoppingCart = [];

window.onload = function() 
{
//  PopulateShoppingListOnload();
//  DisplayShoppingList();
//  PopulateShoppingCartOnload();
//  DisplayShoppingCart();
}

function PopulateShoppingListOnload()
{
//  ShoppingList = [];
//  y = [];
//  ItemSplit = [];
//  y = ReadListCookie();
//  y = RemoveUnwanted(y); 
//  y = y.split('|');
//  if (y) {
//    ShoppingList = y;
//   }
}

function PopulateShoppingCartOnload()
{
//  ShoppingCart = [];
//  y = [];
//  ItemSplit = [];
//  y = ReadCartCookie();
//  y = RemoveUnwanted(y); 
//  y = y.split('|');
//  if (y) {
//    ShoppingCart = y;
//   }
}

function ReadListCookie()
{
//    var nameEQ = CookieList + "=";
//    var ca = document.cookie.split(';');
//    for(var i=0;i < ca.length;i++) {
//        var c = ca[i];
//        while (c.charAt(0)==' ') c = c.substring(1,c.length);
//        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//    }
//    return null;
}

function ReadCartCookie()
{
//    var nameEQ = CookieCart + "=";
//    var ca = document.cookie.split(';');
//    for(var i=0;i < ca.length;i++) {
//        var c = ca[i];
//        while (c.charAt(0)==' ') c = c.substring(1,c.length);
//        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//    }
//    return null;
}

function SaveListCookie()
{
//  DeleteCookie(CookieList);
//    var date = new Date();
    //keeps for a year
//    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
////    document.cookie = CookieList + "=" + escape(ShoppingList.join('|')) + "; path=/;expires = " + date.toGMTString();
}

function SaveCartCookie()
{
//  DeleteCookie(CookieCart);
//    var date = new Date();
    //keeps for a year
//    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
//    document.cookie = CookieCart + "=" + escape(ShoppingCart.join('|')) + "; path=/;expires = " + date.toGMTString();
}

function DeleteCookie(name)
{
//  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function RemoveUnwanted(str)
{
//  if ((str===null) || (str===''))  
//       return false;  
//  else  
//    str = str.toString();  
//    str = str.replace(/%20/g, "");
//    str = str.replace(/%24/g, "$"); 
//    str = str.replace(/%28/g, " (");
//    str = str.replace(/%29/g, ") ");
//    str = str.replace(/%2C/g, ", ");
//    str = str.replace(/%7C/g, " | ");
//  return str.replace(/[^\x20-\x7E]/g, '');  

}

function AddListItem(item,cost,qty,req) 
{
  var WantedItem="";
  var ListItemCount=0;

  MyItems.ItemName=item;
  MyItems.ItemPrice=cost;
  MyItems.ItemQty=qty;
  MyItems.ItemReq=req;

  if (MyItems.ItemName != "" && MyItems.ItemPrice !="" )
  {
    for (var x in MyItems)
    {
      if (ListItemCount===1)
      {
        if(MyItems.ItemPrice < 1)
        {
          WantedItem += "$ 0";
        }
        else
        {
          WantedItem += "$ ";
        }
      }
      WantedItem += MyItems[x];
      if (ListItemCount===0)
      {
        WantedItem += ", ";
      }
       ListItemCount++;
    }
//    alert(WantedItem);
    ShoppingList.push(WantedItem);
  }
  DisplayShoppingList();
  DisplayShoppingCart();
  ClearFocus();
  document.getElementById("AddToList").disabled = false;
  document.getElementById("AddToCart").disabled = false;
//  SaveListCookie();
}

function AddCartItem(item,cost,qty,req) 
{
  var WantedItem="";
  var ListItemCount=0;

  MyItems.ItemName=item;
  MyItems.ItemPrice=cost;
  MyItems.ItemQty=qty;
  MyItems.ItemReq=req;

  if (MyItems.ItemName != "" && MyItems.ItemPrice !="" )
  {
    for (var x in MyItems)
    {
      if (ListItemCount===1)
      {
        if(MyItems.ItemPrice < 1)
        {
          WantedItem += "$ 0";
        }
        else
        {
          WantedItem += "$ ";
        }
      }
      WantedItem += MyItems[x];
      if (ListItemCount===0)
      {
        WantedItem += ", ";
      }
       ListItemCount++;
    }
    ShoppingCart.push(WantedItem);
  }
  DisplayShoppingList();
  DisplayShoppingCart();
  ClearFocus();
  document.getElementById("AddToList").disabled = false;
  document.getElementById("AddToCart").disabled = false;
//  SaveCartCookie();
}

function ClearFocus()
{
  document.getElementById("item").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("req").value = "";
  document.getElementById("item").focus();
}

function DisplayShoppingList() 
{
  var FullList = "";
  var ListLength = ShoppingList.length;

  for (var ListItemCounter = 0; ListItemCounter < ListLength; ListItemCounter++) 
  {
//    FullList = FullList + ShoppingList[ListItemCounter] + '&nbsp;&nbsp;' + '<input class="button3" name="delete" type="button" value="Remove Item" onclick="DeleteListItem(' + ListItemCounter + ')" />' + '&nbsp;&nbsp;' + '<input class="button4" name="change" type="button" value="Edit Item" onclick="ChangeListItem(' + ListItemCounter + ')" />' + '&nbsp;&nbsp;' + '<label><input class="button5" name="move" type="checkbox" value="Move to Cart" onclick="MoveListItem(' + ListItemCounter + ')" />Add to Cart<label>' + '&nbsp;&nbsp;' + '<br>';
  
//  alert(ShoppingList[ListItemCounter]);
  FullList = FullList + ShoppingList[ListItemCounter] + '&nbsp;&nbsp;' + '<input class="button3" name="delete" type="button" value="Remove Item" onclick="DeleteListItem(' + ListItemCounter + ')" />' + '<label><input class="button5" name="move" type="checkbox" value="Move to Cart" onclick="MoveListItem(' + ListItemCounter + ')" />Add to Cart<label>' + '&nbsp;&nbsp;' + '<br>';
  }
  document.getElementById("MyList").innerHTML = FullList;
}

function DisplayShoppingCart() 
{
  var FullCart = "";
  var CartLength = ShoppingCart.length;

  for (var CartItemCounter = 0; CartItemCounter < CartLength; CartItemCounter++) 
  {
//    FullCart = FullCart + ShoppingCart[CartItemCounter] + '&nbsp;&nbsp;' + '<input class="button3" name="delete" type="button" value="Remove Item" onclick="DeleteCartItem(' + CartItemCounter + ')" />' + '&nbsp;&nbsp;' + '<input class="button4" name="change" type="button" value="Edit Item" onclick="ChangeCartItem(' + CartItemCounter + ')" />' + '&nbsp;&nbsp;' + '<label><input class="button5" name="move" type="checkbox" value="Move to Cart" onclick="MoveCartItem(' + CartItemCounter + ')" />Add to List<label>' + '&nbsp;&nbsp;' + '<br>';

    FullCart = FullCart + ShoppingCart[CartItemCounter] + '&nbsp;&nbsp;' + '<input class="button3" name="delete" type="button" value="Remove Item" onclick="DeleteCartItem(' + CartItemCounter + ')" />' + '&nbsp;&nbsp;' + '<label><input class="button5" name="move" type="checkbox" value="Move to Cart" onclick="MoveCartItem(' + CartItemCounter + ')" />Add to List<label>' + '&nbsp;&nbsp;' + '<br>';
  }
  document.getElementById("MyCart").innerHTML = FullCart;
}

function DeleteListItem(ItemNumber)
{
  var RemoveItem = ItemNumber;
  ShoppingList.splice(ItemNumber, 1);
  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveListCookie();
}

function DeleteCartItem(ItemNumber)
{
  var RemoveItem = ItemNumber;
  ShoppingCart.splice(ItemNumber, 1);
  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveCartCookie();
}

function ChangeListItem(ItemNumber)
{
  document.getElementById("AddToCart").disabled = true;

  var ItemFull = ShoppingList[ItemNumber];
  var ItemSplit = ItemFull.split(/, /); 

  MyItems.ItemName=ItemSplit[0].trim();
  MyItems.ItemPrice=ItemSplit[1].replace("$ ", "").replace(/^0+/, "");
  MyItems.ItemQty=ItemSplit[2].replace("x", "").replace(/^0+/, "");
//  MyItems.ItemQty=ItemSplit[3].replace("", "").replace(/^0+/, "");

  document.getElementById("item").value = MyItems.ItemName;
  document.getElementById("cost").value = MyItems.ItemPrice;
  document.getElementById("qty").value = MyItems.ItemQty;
  document.getElementById("req").value = MyItems.ItemReq;

  DeleteListItem(ItemNumber);

  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveListCookie();
}

function ChangeCartItem(ItemNumber)
{
  var ItemFull = ShoppingCart[ItemNumber];
  var ItemSplit = ItemFull.split(/, /); 

  MyItems.ItemName=ItemSplit[0].trim();
  MyItems.ItemPrice=ItemSplit[1].replace("$ ", "").replace(/^0+/, "");
  MyItems.ItemQty=ItemSplit[2].replace("x", "").replace(/^0+/, "");
//  MyItems.ItemReq=ItemSplit[3].replace(":", "").replace(/^0+/, "");

  document.getElementById("item").value = MyItems.ItemName;
  document.getElementById("cost").value = MyItems.ItemPrice;
  document.getElementById("qty").value = MyItems.ItemQty;
  document.getElementById("req").value = MyItems.ItemReq;

  DeleteCartItem(ItemNumber);

  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveCartCookie();
}

function MoveListItem(ItemNumber)
{
  var ItemFull = ShoppingList[ItemNumber];
  var ItemSplit = ItemFull.split(/, /); 

  MyItems.ItemName=ItemSplit[0].trim();
  MyItems.ItemPrice=ItemSplit[1].replace("$ ", "").replace(/^0+/, "");
  MyItems.ItemQty=ItemSplit[2].replace("x", "").replace(/^0+/, "");
//  MyItems.ItemReq=ItemSplit[3].replace(":", "").replace(/^0+/, "");

  document.getElementById("item").value = MyItems.ItemName;
  document.getElementById("cost").value = MyItems.ItemPrice;
  document.getElementById("qty").value = MyItems.ItemQty;
  document.getElementById("req").value = MyItems.ItemReq;

  
  AddCartItem(MyItems.ItemName,MyItems.ItemPrice,MyItems.ItemQty,MyItems.ItemReq);

  DeleteListItem(ItemNumber);

  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveListCookie();
}

function MoveCartItem(ItemNumber)
{
  var ItemFull = ShoppingCart[ItemNumber];
  var ItemSplit = ItemFull.split(/, /); 

  MyItems.ItemName=ItemSplit[0].trim();
  MyItems.ItemPrice=ItemSplit[1].replace("$ ", "").replace(/^0+/, "");
  MyItems.ItemQty=ItemSplit[2].replace("x", "").replace(/^0+/, "");
//  MyItems.ItemReq=ItemSplit[3].replace(":", "").replace(/^0+/, "");

  document.getElementById("item").value = MyItems.ItemName;
  document.getElementById("cost").value = MyItems.ItemPrice;
  document.getElementById("qty").value = MyItems.ItemQty;
  document.getElementById("req").value = MyItems.ItemReq;

  
  AddListItem(MyItems.ItemName,MyItems.ItemPrice,MyItems.ItemQty,MyItems.ItemReq);

  DeleteCartItem(ItemNumber);

  DisplayShoppingList();
  DisplayShoppingCart();
//  SaveCartCookie();
}
