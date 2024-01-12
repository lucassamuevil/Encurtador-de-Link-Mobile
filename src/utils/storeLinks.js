import AsyncStorage from '@react-native-async-storage/async-storage';


//Busca por links salvos.

export async function getLinksSave(key){
const myLinks = await  AsyncStorage.getItem(key);

let linkSaves = JSON.parse(myLinks) || [];
return linkSaves;

}





//Salva um Link.
export async function saveLink(key, newLink){
let linksStored = await getLinksSave(key);



const hasLink = linksStored.some( Link => Link.id === newLink.id);
if (hasLink){
    console.log('ESSE LINK JÁ EXISTE NA LISTA');
    return;
}

linksStored.push(newLink);
await AsyncStorage.setItem(key, JSON.stringify(linksStored));
console.log('LINK SALVO COM SUCESSO!');

}




//Deleta um link especifico.
export async function deleteLink(Links, id){
    let myLinks = Links.filter((item) => {
        return (item.id !== id)
    })
  await AsyncStorage.setItem('Kutter links', JSON.stringify(myLinks));
  console.log('LINK DELETADO DA LISTA');;

  return myLinks;

}