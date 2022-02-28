#include <stdio.h>
#include <iostream>
#include <string.h>
#include <unistd.h>
#include <stdio.h>


using namespace std;

int main(int argc, const char* argv[]){
    // Change {dir} to dir target
    // Example C:/Users/my-profille/Desktop/commands
    char cmd_x[100] = "node {dir}js/start_proj/app.js ";

    for(int i = 0; i < argc; i++){
        if(i >= 1){
            strcat(cmd_x, argv[i]);
            strcat(cmd_x, " ");
        }
    }
    system(cmd_x);
    return 0;
}
