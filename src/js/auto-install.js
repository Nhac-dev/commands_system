const {readdirSync, readFileSync, writeFileSync, mkdirSync, readdir} = require("fs"),
    {moveSync} = require("fs-extra"),
    {execSync} = require("child_process");

const locals = {
    bin:  process.mainModule.path.replaceAll("\\src\\js", "")+"\\bin",
    local: process.mainModule.path.replaceAll("js", "")
},
    edit_path = [
        "lj.cpp",
        "touch.cpp",
        "ns.cpp"
    ]
try {
    const path = readdirSync(locals.local);

    readdir(`${locals.bin}`, (err)=>{
        if(err){
            mkdirSync(`${locals.bin}`)
        }
    })

    path.forEach((v)=>{
        if(edit_path.includes(v)){
            let old_data = readFileSync(`${locals.local}/${v}`, "utf8");

            if(old_data.includes("{dir}")) writeFileSync(`${locals.local}/${v}`, old_data.replaceAll("{dir}", locals.local).replaceAll("\\", "/"), "utf8");
            // else writeFileSync(`${locals.local}/${v}`, old_data.replaceAll(locals.local.replaceAll("\\", "/"), "{dir}"), "utf8");

        }
        
        if(v != "auto_install.cpp" && v.includes(".cpp")){
            process.chdir(`${locals.local}`)                
            
            execSync(`g++ ${locals.local}${v} -o ${v.replace(".cpp", "")}`);
            try {
                execSync(`move ${locals.local}${v.replace(".cpp", ".exe")} ${locals.bin}`);
            } catch (error) {
                console.log(error);
            }
        }
        
    })

    execSync(`set PATH=%PATH%;${locals.bin.replaceAll("/", "\\")}`)    


} catch (error) {
    console.log(error);
}