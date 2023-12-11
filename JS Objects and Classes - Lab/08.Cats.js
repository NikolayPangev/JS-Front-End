function cats(arrStr) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let index = 0; index < arrStr.length; index++){
        const catInfo = arrStr[index].split(' ');
        const [name, age] = catInfo;
        const newCat = new Cat(name, age);
        newCat.meow(); 
        cats.push(newCat);
    }
}
