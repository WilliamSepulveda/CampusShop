export const getAllropa = async() =>{
    const url = ("https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1720267200000&signature=WSBAZhfWbCOIL8zV5Saw62BjUNKr8P9VdCRy09Vn9cU&downloadName=Documentos_DB.json");
const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}