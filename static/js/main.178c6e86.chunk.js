(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,e,a){t.exports=a(401)},388:function(t,e,a){},390:function(t,e,a){},394:function(t,e,a){},396:function(t,e,a){},398:function(t,e,a){},401:function(t,e,a){"use strict";a.r(e);a(161);var n=a(1),r=a.n(n),c=a(153),o=a.n(c),u=a(54),l=a(55),s=a(57),i=a(56),d=a(58),p=a(31),m=a(156),h=a.n(m),f=function(t,e){switch(e){case"BRL":return t.toFixed(2).replace(".",",");default:return t.toFixed(2)}},v={lowestprice:function(t,e){return t.price<e.price?-1:t.price>e.price?1:0},highestprice:function(t,e){return t.price>e.price?-1:t.price<e.price?1:0}},y=(a(388),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),E=function(t){var e=t.options,a=t.classes,n=t.handleOnChange;return r.a.createElement("select",{onChange:function(t){return n(t.target.value)},className:a},function(t){return t.map(function(t){return r.a.createElement("option",{value:t.value,key:t.value},t.label)})}(e))},O=[{value:"",label:"Select"},{value:"lowestprice",label:"Lowest to highest"},{value:"highestprice",label:"Highest to lowest"}],b=Object(p.b)(function(t){return{sort:t.sort.type}},{updateSort:function(t){return{type:"UPDATE_SORT",payload:t}}})(function(t){var e=t.updateSort;t.sort;return r.a.createElement("div",{className:"sort"},"Order by",r.a.createElement(E,{options:O,handleOnChange:function(t){return e(t)}}))}),g=function(t){return r.a.createElement("div",{className:"shelf-container-header"},r.a.createElement("small",{className:"products-found"},r.a.createElement("span",null,t.productsLength," Product(s) found.")),r.a.createElement(b,null))},P=function(t){return r.a.createElement("div",{className:t.classes},r.a.createElement("img",{src:t.src,alt:t.alt,title:t.title}))},_=Object(p.b)(null,{addProduct:function(t){return{type:"ADD_PRODUCT",payload:t}}})(function(t){var e=t.product,a=t.addProduct;e.quantity=1;var n=f(e.price,e.currencyId);return r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(e)},"data-sku":e.id},r.a.createElement(P,{classes:"shelf-item__thumb",src:e.img_url,alt:e.name}),r.a.createElement("p",{className:"shelf-item__title"},e.name),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("div",{className:"val"},r.a.createElement("small",null,"Rs"),r.a.createElement("b",null,n.substr(0,n.length-3)),r.a.createElement("span",null,n.substr(n.length-3,3)))),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))}),C=function(t){return t.products.map(function(t){return r.a.createElement(_,{product:t,key:t.id})})},T=(a(390),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort;a.setState({isLoading:!0}),a.props.fetchProducts(t,e,function(){a.setState({isLoading:!1})})},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(t){var e=t.filters,a=t.sort,n=this.props.filters;e.length!==n.length&&this.handleFetchProducts(e,void 0),a!==this.props.sort&&this.handleFetchProducts(void 0,a)}},{key:"render",value:function(){var t=this.props.products,e=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(y,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(g,{productsLength:t.length}),r.a.createElement(C,{products:t})))}}]),e}(n.Component)),N=Object(p.b)(function(t){return{products:t.shelf.products,filters:t.filters.items,sort:t.sort.type}},{fetchProducts:function(t,e,a){return function(n){return h.a.get("https://api.myjson.com/bins/qzuzi.json").then(function(r){var c=r.data;return t&&t.length>0&&(c=c.filter(function(e){return t.find(function(t){return e.availableSizes.find(function(e){return e===t})})})),e&&(c=c.sort(v[e])),a&&a(),n({type:"FETCH_PRODUCTS",payload:c})}).catch(function(t){console.log("Could not fetch products. Try again later.")})}}})(T),j=a(157),R=a(158),w=(a(394),function(t){return r.a.createElement("div",{className:"topHeader"},r.a.createElement(j.a,{icon:R.a}))}),A=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(s.a)(this,Object(i.a)(e).call(this,t))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var t=a.props.changeProductQuantity,e=a.state.product;e.quantity=e.quantity+1,t(e)},a.handleOnDecrease=function(){var t=a.props.changeProductQuantity,e=a.state.product;e.quantity=e.quantity-1,t(e)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return t.handleMouseOver()},onMouseOut:function(){return t.handleMouseOut()},onClick:function(){return e(a)}}),r.a.createElement(P,{classes:"shelf-item__thumb",src:a.img_url,alt:a.name}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.name),r.a.createElement("p",{className:"desc"},"Quantity: ",a.quantity)),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("p",null,"Rs ".concat(f(a.price,"$"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,disabled:1===a.quantity,className:"change-product-button"},"-"),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),e}(n.Component),D=(a(396),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(r)))).state={isOpen:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(t){var e=a.props,n=e.cartProducts,r=e.updateCart,c=!1;n.forEach(function(e){e.id===t.id&&(e.quantity+=t.quantity,c=!0)}),c||n.push(t),r(n),a.openFloatCart()},a.removeProduct=function(t){var e=a.props,n=e.cartProducts,r=e.updateCart,c=n.findIndex(function(e){return e.id===t.id});c>=0&&(n.splice(c,1),r(n))},a.proceedToCheckout=function(){var t=a.props.cartTotal,e=t.totalPrice,n=t.productQuantity,r=t.currencyFormat,c=t.currencyId;n?alert("Checkout - Subtotal: ".concat(r," ").concat(f(e,c))):alert("Add some product in the cart!")},a.changeProductQuantity=function(t){var e=a.props,n=e.cartProducts,r=e.updateCart,c=n.find(function(e){return e.id===t.id});c.quantity=t.quantity,c.quantity<=0&&a.removeProduct(c),r(n)},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){t.newProduct!==this.props.newProduct&&this.addProduct(t.newProduct),t.productToRemove!==this.props.productToRemove&&this.removeProduct(t.productToRemove),t.productToChange!==this.props.productToChange&&this.changeProductQuantity(t.productToChange)}},{key:"render",value:function(){var t=this,e=this.props,a=e.cartTotal,n=e.cartProducts,c=e.removeProduct,o=e.changeProductQuantity,u=n.map(function(t){return r.a.createElement(A,{product:t,removeProduct:c,changeProductQuantity:o,key:t.id})}),l=["float-cart"];return this.state.isOpen&&l.push("float-cart--open"),r.a.createElement("div",{className:l.join(" ")},this.state.isOpen&&r.a.createElement("div",{onClick:function(){return t.closeFloatCart()},className:"float-cart__close-btn"},"X"),!this.state.isOpen&&r.a.createElement("span",{onClick:function(){return t.openFloatCart()},className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("div",{className:"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"bag"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("span",{className:"header-title"},"Cart")),r.a.createElement("div",{className:"float-cart__shelf-container"},u,!u.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("div",{className:"sub"},"SUBTOTAL"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"Rs ".concat(f(a.totalPrice,a.currencyId))),r.a.createElement("small",{className:"sub-price__installment"},!!a.installments&&r.a.createElement("span",null,"OR UP TO ".concat(a.installments," x ").concat(a.currencyFormat," ").concat(f(a.totalPrice/a.installments,a.currencyId))))),r.a.createElement("div",{onClick:function(){return t.proceedToCheckout()},className:"buy-btn"},"Checkout"))))}}]),e}(n.Component)),S=Object(p.b)(function(t){return{cartProducts:t.cart.products,newProduct:t.cart.productToAdd,productToRemove:t.cart.productToRemove,productToChange:t.cart.productToChange,cartTotal:t.total.data}},{loadCart:function(t){return{type:"LOAD_CART",payload:t}},updateCart:function(t){return function(e){var a=t.reduce(function(t,e){return t+=e.quantity},0),n=t.reduce(function(t,e){return t+=e.price*e.quantity},0);e({type:"UPDATE_CART",payload:{productQuantity:a,installments:t.reduce(function(t,e){return t=e.installments>t?e.installments:t},0),totalPrice:n,currencyId:"USD",currencyFormat:"$"}})}},removeProduct:function(t){return{type:"REMOVE_PRODUCT",payload:t}},changeProductQuantity:function(t){return{type:"CHANGE_PRODUCT_QUANTITY",payload:t}}})(D),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("main",null,r.a.createElement(N,null),r.a.createElement(S,null)))},F=a(37),U=a(159),q=a(16),I={products:[]},Q={products:[]},M={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},L={items:[]},H={type:""},x=Object(F.c)({shelf:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PRODUCTS":return Object(q.a)({},t,{products:e.payload});default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOAD_CART":return Object(q.a)({},t,{products:e.payload});case"ADD_PRODUCT":return Object(q.a)({},t,{productToAdd:Object.assign({},e.payload)});case"REMOVE_PRODUCT":return Object(q.a)({},t,{productToRemove:Object.assign({},e.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(q.a)({},t,{productToChange:Object.assign({},e.payload)});default:return t}},total:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_CART":return Object(q.a)({},t,{data:e.payload});default:return t}},filters:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_FILTER":return Object(q.a)({},t,{items:e.payload});default:return t}},sort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_SORT":return Object(q.a)({},t,{type:e.payload});default:return t}}}),J=function(t){t=JSON.parse(window.localStorage.getItem("state"))||t;var e=[U.a],a=Object(F.e)(x,t,Object(F.d)(F.a.apply(void 0,e)));return a.subscribe(function(){var t=a.getState(),e={cart:t.cart,total:t.total};window.localStorage.setItem("state",JSON.stringify(e))}),a},z=function(t){var e=t.children,a=t.initialState,n=void 0===a?{}:a;return r.a.createElement(p.a,{store:J(n)},e)};a(398);o.a.render(r.a.createElement(z,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[160,2,1]]]);
//# sourceMappingURL=main.178c6e86.chunk.js.map