const {argv} = process,
    {writeFileSync, readFile, readdirSync} = require("fs"),
    local_path = process.cwd(),
    name_file = argv[2],
    credentials_response = {
        place_create: local_path,
        file_to_create: name_file,
        dir_if_create: `${local_path}/${name_file}`,
    };


try {
    const place_create = readdirSync(local_path);

        readFile(credentials_response.file_to_create, "utf-8", (err, d)=>{
            if(d){
                credentials_response.error_msg = "Este arquivo já existe, e por questão de segurança não podemos sobrescrever!"
                console.log(credentials_response.error_msg);
                console.table(credentials_response)    
            }else if(err){
                writeFileSync(credentials_response.file_to_create, "", {encoding: "utf8"})
            }
        });    
} catch (error) {
    if(error){

        credentials_response.error_msg = "Diretório Raiz não encontrado!"

        console.log(credentials_response.error_msg);
        console.table(credentials_response)
    }
}