let pageData={
    productName:"訂張票到月球",
    productDescription:"超奢華太空之旅",
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
        ],
        h2ClassController:{
            centered:true,
            colorFont:false
        },

        pStyleController:{
            'margin-left':'50px',
            color:'blue',
            'font-size':'20px',
            'font-style':'italic'
        }  ,
        imageStyleController:{
            margin:'auto',
            display:'block',
            width:'50%'
            },
        imageAlt:"Photo from space" 

};
const App= Vue.createApp({
data(){
return pageData;}
});
App.mount
("#app");