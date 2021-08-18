import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//products calls

//create a product
export const createaProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a product

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

/////////////////////////////////////////////////  Categories.........

export const getCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const updateCategory=(categoryId,userId,token,name)=>{
  return fetch(`${API}/category/${categoryId}/${userId}`,{
    method:"PUT",
    headers:{
      Accept:"application/json",
      "Content-Type": "application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(name)
  })
  .then(response=>{
    return response.json();
  })
  .catch(err=>console.log(err));
};

export const deleteCategory=(categoryId,userId,token)=>{
   return fetch(`${API}/category/${categoryId}/${userId}`,{
     method:"DELETE",
     headers:{
       Accept:"application/json",
       Authorization:`Bearer ${token}`
     }
   })
   .then(res=>{
     return res.json();
   })
   .catch((err)=>{
     console.log(err);
   })
};

///////////////////////////////////////////////////  Orders..............
export const getOrders=(userId,token)=>{
  return fetch(`${API}/order/all/${userId}`,
  {
   method:"GET",
   headers:{
     Accept:"application/json",
     Authorization:`Bearer ${token}`
   }
  })
  .then((res)=>{return res.json()})
  .catch((err)=>{console.log(err)})
}

export const getOrderStatus=(userId,token)=>{
  return fetch(`${API}/order/status/${userId}`,
  {method:"GET",
headers:{
  Accept:"application/json",
  Authorization:`Bearer ${token}`
}
}).then((res)=>{return res.json()})
.catch((err)=>{console.log(err)})
}

export const updateStatus=(userId,token,orderId,status1)=>{
  
  console.log(status1);

  return fetch(`${API}/order/${orderId}/status/${userId}`,
  {method:"PUT",
  headers:{
    Accept:"application/json",
    "Content-Type": "application/json",
    Authorization:`Bearer ${token}`
  },
  body:JSON.stringify({status:status1})
  }).then((res)=>{return res.json()})
  .catch((err)=>{console.log(err)})
}