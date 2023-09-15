const app = Vue.createApp({
    data(){
        return {
            product:"Socks",
            image:"./assets/images/socks_blue.jpg",
            githubUrl:"https://github.com/c-jeongyyun",
            inventory:8,
            onSale:true,
            details:[
                "면 20%", 
                "폴리에스터 70%", 
                "울 10%", 
            ],
            variants:[
                {id:"124", color:"green"},
                {id:"125", color:"blue"}
            ],
            sizes:[
                "S","M","L"
            ],
            cart:0,

        
        
        }
    }
})
