import instance from '../Config/axios'
export function getAll(){
    return instance.get("sites/MLA/search?q=Star+wars")
}

export function getById(id){
    return instance.get("items/"+id)
}   
