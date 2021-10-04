import instance from '../Config/axios'
export function getAll(){
    return instance.get("sites/MLA/search?q=star+wars")
}

export function getById(id){
    return instance.get("items/"+id)
}   

