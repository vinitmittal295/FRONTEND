let vinit=[
        {
            id:1,
            name:"v",
            marks:85,
        },
        {
            id:2,
            name:"b",
            marks:75,
        },
        {
            id:3,
            name:"c",
            marks:65,
        },
    
        {
            id:4,
            name:"d",
            marks:95,
        },
        {
            id:5,
            name:"e",
            marks:70,
        },
    ]
    let data= vinit.filter((item)=>{
        return ((item.marks +item.marks+item.marks)/3)>75;
    })
    console.log(data)