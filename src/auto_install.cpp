#include <stdio.h>
#include <iostream>
#include <string.h>
#include <unistd.h>
#include <stdio.h>


using namespace std;

int main(){
    // Change {dir} to dir target
    // Example C:/Users/my-profille/Desktop/commands
    char cmd_x[100] = "node ./src/js/auto-install.js ";

    
    system(cmd_x);
    return 0;
}
