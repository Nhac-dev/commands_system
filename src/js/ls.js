const {argv} = process,
    {readdirSync, readFile, readdir, readFileSync} = require("fs"),
    local_path = process.cwd(),
    search = process.argv[2]
    credentials_response = {
        path: (search?.includes("C:") ||
                (search?.includes("/") &&
                (search[0] != "." && search[1] != "/")
                )
            )? `${search}`: `${local_path}${search?.replaceAll(".\\", "/").replaceAll("\\", "/") || "/"}`,
    };

try {
    const place_create = readdirSync(credentials_response.path),
        files = [],
        folders = [];
    let text_show = ``;

    place_create.forEach((data, i)=>{
        try {
            const is_file = readFileSync(`${credentials_response.path}/${data}`, "utf8")
            if(is_file){
                files.push(data)
                text_show += `${i + 1}: ${data} - Arquivo\n`
            }
        } catch (error) {
            try {
                const is_folder = readdirSync(`${credentials_response.path}/${data}`)
                if(is_folder){
                    folders.push(data)
                    text_show += `${i + 1}: ${data} - Pasta\n`
                } 
            } catch (error) {
            }
        }
    })

    console.log(`\n\tINFORMAÇÃO DE "${credentials_response.path}"`);
    console.log("\n"+text_show);
    // console.log("\nARQUIVOS");
    // console.table(files)
    // console.log("\nPASTAS");
    // console.table(folders)
} catch (error) {
    if(error){
        credentials_response.error_msg = "Diretório Raiz não encontrado!"

        console.log(credentials_response.error_msg);
        console.table(credentials_response)
    }
}
