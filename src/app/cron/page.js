'use client'
const page = () => {
    (async()=>{
        let url = 'http://localhost:5500/refresh'
        let res = await fetch(url,{
            method: "POST"
        })
        res = await res.json()
        console.log(res);
    })()
}

export default page