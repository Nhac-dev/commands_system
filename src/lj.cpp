#include <stdio.h>
#include <iostream>
#include <string>
#include <filesystem>
#include <unistd.h>

using namespace std;

const char *command_exec = NULL;


int main(int argc, char* argv[]){
    // Change {dir} to dir target
    // Example C:/Users/my-profille/Desktop/commands
    char cmd_x[100] = "node C:/Users/Jefferson/Desktop/my-commands/src/js/ls.js ";

    if(argv[1]){
        command_exec = strcat(cmd_x, argv[1]);
    }else{
        command_exec = cmd_x;
    }
    
    system(command_exec);

    return 0;
}
