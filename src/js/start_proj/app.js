const args = [],
    {mkdirSync, writeFileSync, readFileSync, createWriteStream, opendir} = require("fs"),
    http = require("https"),
    script_config = {
        url: "https://nhacscript.web.app/script/3.0/script/PT/3.4-lts.js", // NhacScript URL
        name: "My Project", // Project Name
        dir: process.cwd(), // Local to commands called
        n_JS: false, // Run and create a nodeJS application
        lib: null // Read only if n_JS is true
    },
    folders = [
        [
            "CSS",
            "JS",
            "SRC",
            "SRC/logo",
            "SRC/icons",
            "SRC/wallpapers"
        ],
        [
            "helpers",
            "routers",
            "database",
            "database/model",
            "client",
            "views",
            "views/layout"
        ]
    ],
    files = [
        [
            "index.html",
            "CSS/style.css",
            "JS/app.js",
        ],
        [
            "server.js",
            "task.txt",
            ".gitignore",
            "database/database.js",
            "helpers/middleware.js",
        ]
    ];

process.argv.map((v, i)=> {
    if(i > 1){
        args.push(v)
    }
});

args.forEach((v, i)=>{
    if(v.includes("-n=") || v.includes("name=")){
        script_config.name = v.split("=")[1]
    }else if(v.includes("lib=")){
        script_config.lib = v.split('=')[1].replaceAll(",", " ");
    }else if(v.includes("-d=") || v.includes("dir=")){
        let local_dir = v.split("=")[1]
        script_config.dir = local_dir[0] == "/" || local_dir[0] == "\\"? `C:${local_dir}`: `${script_config.dir}/${local_dir}` 
    }else if(i == 0){
        script_config.name = v
    }else if(i == 1 && v == "nodejs"){
        script_config.n_JS = true
    }else if(i == 2 || (i == 1 && v != "nodejs")){
        let local_dir = v
        script_config.dir = local_dir[0] == "/" || local_dir[0] == "\\"? `C:${local_dir}`: `${script_config.dir}/${local_dir}` 
    }
})

opendir(`${script_config.dir}/${script_config.name}`, (err, dir)=>{
    if(err){
        if(script_config.n_JS){
            mkdirSync(`${script_config.dir}/${script_config.name}`)
            folders[1].forEach(v=>{
                mkdirSync(`${script_config.dir}/${script_config.name}/${v}`)
            })
            folders[0].forEach(v=>{
                mkdirSync(`${script_config.dir}/${script_config.name}/client/${v}`)
            })

            files[0].forEach(v=>{
                if(v != "index.html") writeFileSync(`${script_config.dir}/${script_config.name}/client/${v}`, "")
            })
            files[1].forEach(v=>{
                writeFileSync(`${script_config.dir}/${script_config.name}/${v}`, "")
            })
        }else{
            mkdirSync(`${script_config.dir}/${script_config.name}`)
            folders[0].forEach(v=>{
                mkdirSync(`${script_config.dir}/${script_config.name}/${v}`)
            })
            files[0].forEach(v=>{
                writeFileSync(`${script_config.dir}/${script_config.name}/${v}`, "")
            })
        }

        

        const file = createWriteStream(script_config.n_JS? `${script_config.dir}/${script_config.name}/client/JS/NS.js`: `${script_config.dir}/${script_config.name}/JS/NS.js`);
        const request = http.get(script_config.url, function(response) {
        response.pipe(file);
        });
    }
})