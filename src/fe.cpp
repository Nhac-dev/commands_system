#include <stdio.h>
#include <iostream>
#include <string.h>
#include <unistd.h>

using namespace std;

const char *command_exec = NULL;


int main(int argc, char* argv[]){
    
    char cmd_x[100] = "explorer.exe ";

    strcat(cmd_x, argv[1]);

    system(cmd_x);

    return 0;
}
