#include <stdio.h>
#include <iostream>
#include <string>
#include <filesystem>
#include <unistd.h>

using namespace std;

const char *command_exec = NULL;


int main(int argc, char* argv[]){
    
    char cmd_x[100] = "explorer.exe ";

    command_exec = strcat(cmd_x, argv[1]);

    system(cmd_x);

    return 0;
}
