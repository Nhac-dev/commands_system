#include <stdio.h>
#include <iostream>
#include <string.h>
#include <unistd.h>
#include <stdio.h>


using namespace std;

int main(){
    char cmd_x[100] = "node ./src/js/auto-install.js ";

    
    system(cmd_x);
    return 0;
}
