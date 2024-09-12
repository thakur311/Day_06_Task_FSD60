//Q3 Write a "person" class to hold all the details
 
class person{
    constructor(name,age,gender,address,contact){
        this.name=name
        this.age=age
        this.gender=gender
        this.address=address
        this.contact=contact
    }
}
let s1= new person("Chandan",25,"Male","kolkata",8240119349)
console.log(s1)


//Q4 Write a class to calculate a Uber price.

class price {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier){
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }
    
    calculatePrice(distanceinKM,durationInMinutes){
     let Uberprice=(this.baseFare +(this.costPerMile * distanceinKM) +(this.costPerMinute * durationInMinutes)) * this.surgeMultiplier;
    let s3= Uberprice.toFixed(2)
     console.log(s3)
     }


    
}
let s2= new price(3.00,1.25,.30,1.2) 
let{baseFare, costPerMile, costPerMinute, surgeMultiplier}=s2
s2.calculatePrice(10,25)


      

