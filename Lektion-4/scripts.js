const arrayValue = []
arrayValue.push() //lägger till ett nytt värde i slutet av arrayen
arrayValue.unshift() //lägger till ett nytt värde i början av arrayen
arrayValue.unshift() //tar bort första värdet i arrayen
arrayValue.pop() //tar bort sista värdet i arrayen

arrayValue.forEach((value) =>
{

})

const mapValue = new Map()
mapValue.set('myKey', 44)
mapValue.get('myKey')
mapValue.delete('myKey')
//console.log(mapValue.keys())

const setValue = new Set()
setValue.add(123)
setValue.delete(123)
setValue.entries()

const objectValue = {
    name: 'Michael',
    age: 23,
    lastName: 'L',
    favouriteFoods: ['äpple', 'banan', 'päron'],
    homes: {
        adress: '',
        zipcode: 12345
    },
    run: (value) => {
        //console.log('Springer så himla', value)
    }
}

objectValue.run('långsamt')

for(let i = 0 ; i <100; i++){

}
for(let data of arrayValue){

}
//använd alltid "for in" loopar för objekt
for(let objValue in objectValue){
    //console.log(objValue + ":" + objectValue[objValue])
}
objectValue.favouriteFoods.forEach(()=>{

})

Object.keys(objectValue)



const button = document.querySelector('.btn')
button.addEventListener(('mouseenter'), ()=>{
    console.log('Du hovrar över knappen!')
})
button.addEventListener(('mouseleave'), ()=>{
    console.log('Du slutade hovra över knappen!')
})
