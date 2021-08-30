import instance from '../Config/axios';


export function getAll(){

    
/* acá estoy comentando el servicio que usé para hacer el fetch.then o async-await
fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
    .then(res=>res.json())
    */

    /*acá estoy por usar Axios para hacer lo mismo que hice con fetch*/

    return instance.get("sites/MLA/search?q=cocina")
    


}
